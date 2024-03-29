import './index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { Popup } from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  buttonEdit, buttonAdd, buttonAvatar, nameInput, jobInput, formElementEdit,
  formElementAdd, templateSelector, cardsContainerSelector, formSelectors, initialCards, formAvatar, avatarInput, saveButtons
} from '../utils/constants.js';

let userId = null;

const api = new Api(
  {
    url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
    headers: {
      authorization: '6df29fdd-ef30-40f2-9646-a62800cbaefa',
      'content-type': 'application/json',
    },
  }
);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profileAvatarSelector: '.profile__avatar-img'
}
);

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmitForm: (data) => {
    renderLoading(true, popupEdit);
    const updateUserData = api.editProfile({
      name: data.nameInput,
      about: data.jobInput
    });
    updateUserData.then((item) => {
      userInfo.setUserInfo(item);
      popupEdit.close();
    }).catch((err) => console.log(err))
      .finally(() => {

        renderLoading(false, popupEdit);
      });
  }
});

popupEdit.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_place');
popupWithImage.setEventListeners();

const popupWithConfirm = new PopupWithConfirm('.popup_confirm');
popupWithConfirm.setEventListeners();


const popupAvatarChange = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleSubmitForm: (data) => {
    renderLoading(true, popupAvatarChange);
    const updateUrl = api.changeAvatar(data);
    updateUrl.then((item) => {
      userInfo.setAvatar(item);
      popupAvatarChange.close();
    }).catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, popupAvatarChange);
      });
  }
});
popupAvatarChange.setEventListeners();

const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmitForm: (data) => {
    const newCard = api.addCard(data);
    renderLoading(true, popupAdd);
    newCard.then((item) => {
      const card = createCard(item);
      defaultCardList.addItem(card);
      popupAdd.close();
    }).catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, popupAdd)
      });

  }
});
popupAdd.setEventListeners();

buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  newCardValidation.resetValidation();
});

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
const avatarValidation = new FormValidator(formSelectors, formAvatar);
profileValidation.enableValidation();
newCardValidation.enableValidation();
avatarValidation.enableValidation();



const createCard = (item) => {
  const card = new Card({
    item: item,
    templateSelector: templateSelector,
    userId: userId,
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    },
    handleDeleteClick: () => {
      popupWithConfirm.open(); 
      popupWithConfirm.setConfirmAction(() => { 
        api.deleteCard(card._id) 
          .then(() => { 
            card.deleteCard(); 
            popupWithConfirm.close(); 
          }).catch((err) => console.log(err)); 
      })
    },
    handleLikeClick: () => {
      if (!card.isLiked()) {
        api.setLike(card._id)
          .then((item) => {
            card.changeLikeCount(item);
            card.toggleLike();
          }).catch((err) => console.log(err));
      } else {
        api.deleteLike(card._id)
          .then((item) => {
            card.changeLikeCount(item);
            card.toggleLike();
          }).catch((err) => console.log(err));
      }
    }
  }
  )
  const cardMarkup = card.createCardMarkup();
  return cardMarkup;
};


function setInputEditFormValue() {
  const userInfoContent = userInfo.getUserInfo();
  nameInput.value = userInfoContent.name;
  jobInput.value = userInfoContent.job;
}

buttonEdit.addEventListener('click', function () {
  setInputEditFormValue();
  popupEdit.open();
  profileValidation.resetValidation();
});

buttonAvatar.addEventListener('click', function () {
  popupAvatarChange.open();
  profileValidation.resetValidation();
});


const defaultCardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    defaultCardList.addItem(card);
  }
}, cardsContainerSelector);


Promise.all([                 //в Promise.all передаем массив промисов которые нужно выполнить 
  api.updateUserInfo(),
  api.getAllCards()])
  .then(([item, cards]) => {
    userInfo.setUserInfo(item);
    userId = item._id;   //попадаем сюда, когда оба промиса будут выполнены, деструктурируем ответ
    defaultCardList.render(cards);     //все данные получены, отрисовываем страницу 
  })
  .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
    console.log(err);
})


function renderLoading(isLoading, popup) {
  popup.setLoadingButton(isLoading)
}



