import './index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { Popup } from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
import {
  buttonEdit, buttonAdd, buttonAvatar, nameInput, jobInput, formElementEdit,
  formElementAdd, templateSelector, cardsContainerSelector, formSelectors, initialCards, formAvatar, avatarInput, saveButtons
} from '../utils/constants.js';

const api = new Api(
  {
    url: 'https://mesto.nomoreparties.co/v1/cohort-50/',
    headers: {
      authorization: '6df29fdd-ef30-40f2-9646-a62800cbaefa',
      'content-type': 'application/json',
    },
  })


const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__job', profileAvatarSelector: '.profile__avatar-img' }, api);
userInfo.getUserInfoFromApi();

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
  const userAvatar = userInfo.getAvatar();
  avatarInput.value = userAvatar;
  popupAvatarChange.open();
  profileValidation.resetValidation();
});



function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
const avatarValidation = new FormValidator(formSelectors, formAvatar);
profileValidation.enableValidation();
newCardValidation.enableValidation();
avatarValidation.enableValidation();


function createCard(item, userId) {
  const card = new Card(item, templateSelector, handleCardClick, api, userId);
  const cardMarkup = card.createCardMarkup();
  card.setButtonDelete(popupWithConfirm, item);
  return cardMarkup;
}


const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmitForm: (data, button) => {
    renderLoading(true, button);
    const updateUserData = api.editProfile({
      name: data.nameInput,
      about: data.jobInput
    });
    updateUserData.then((item) => {
      userInfo.setUserInfo(item);
    }).catch((err) => alert(err))
      .finally(() => {
        popupEdit.close();
        renderLoading(false, button);
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
  handleSubmitForm: (data, button) => {
    renderLoading(true, button);
    const updateUrl = api.changeAvatar(data);
    updateUrl.then((item) => {
      userInfo.setAvatar(item);
    }).catch((err) => console.log(err))
      .finally(() => { 
        popupAvatarChange.close();
        renderLoading(false, button); });
  }
});

popupAvatarChange.setEventListeners();

const getUserInfo = api.updateUserInfo();
getUserInfo.then((info) => {
  const userId = info._id;

  const cards = api.getAllCards();
  cards.then((cards) => {
    const defaultCardList = new Section({
      items: cards,
      renderer: (item) => {
        const card = createCard(item, userId);
        defaultCardList.addItem(card);
      }
    }, cardsContainerSelector);
    defaultCardList.render();


    buttonAdd.addEventListener('click', function () {
      popupAdd.open();
      newCardValidation.resetValidation();
    });



    const popupAdd = new PopupWithForm({
      popupSelector: '.popup_add',
      handleSubmitForm: (data, button) => {
        const newCard = api.addCard(data);
        renderLoading(true, button);
        newCard.then((item) => {
          const card = createCard(item, userId);
          defaultCardList.addItem(card);
        }).catch((err) => alert(err))
        .finally(() => {
          popupAdd.close();
          renderLoading(false, button)});

      }
    });
    popupAdd.setEventListeners();



  }).catch((err) => alert(err));
}).catch((err) => alert(err));

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Cохранение...';
  }
  else if (!isLoading) {
    button.textContent = 'Сохранить';
  }
}

