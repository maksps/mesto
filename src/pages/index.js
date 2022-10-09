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

let userId = 'aeec8bcd4663f0fdd55a07a0';



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



const getUserInfoFromApi = () => {
  const userData = api.updateUserInfo();
  userData.then((item) => {
    userInfo.setUserInfo(item);
    return item;
  }).catch((err) => console.log(err));
}
getUserInfoFromApi();// наверное потом убрать


const getUserInfo = api.updateUserInfo();
getUserInfo.then((info) => {
  userId = info._id;
  console.log(userId);
}).catch((err) => console.log(err));


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
      popupEdit.close();
    }).catch((err) => console.log(err))
      .finally(() => {

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
      popupAvatarChange.close();
    }).catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, button);
      });
  }
});
popupAvatarChange.setEventListeners();

const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmitForm: (data, button) => {
    const newCard = api.addCard(data);
    renderLoading(true, button);
    newCard.then((item) => {
      const card = createCard(item, userId);
      defaultCardList.addItem(card);
      popupAdd.close();
    }).catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, button)
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



const createCard = (item, userId) => {
  const card = new Card({
    item: item,
    templateSelector: templateSelector,
    userId: userId,
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    },
    handleDeleteClick: () => {
      popupWithConfirm.open();
      popupWithConfirm.setConfirmAction((evt) => {
        evt.stopImmediatePropagation();
        api.deleteCard(card._id)
          .then(() => {
            console.log(card);
            card.remove();
            card = null;
            popupWithConfirm.close();
          }).catch((err) => console.log(err));
      })
    },
    handleLikeClick: () => {
      
      console.log(card.isLiked());
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
  const userAvatar = userInfo.getAvatar();
  popupAvatarChange.open();
  profileValidation.resetValidation();
});



// function handleCardClick(link, name) {
//   popupWithImage.open(link, name);
// };

// const handleDeleteClick = (card) => {
//   popupWithConfirm.open();
//   popupWithConfirm.setConfirmAction((evt) => {
//     evt.stopImmediatePropagation();
//     api.deleteCard(userId)
//       .then(() => {
//         card.remove();
//         card = null;
//         popupWithConfirm.close();
//       }).catch((err) => console.log(err));
//   })
// };

// const handleLikeClick = (card) => {
//   card.toggleLike();
//   if (card.isLiked()) {
//     api.setLike(card._id)
//       .then((item) => {
//         card.changeLikeCount(item);
//       }).catch((err) => console.log(err));
//   } else {
//     api.deleteLike(card._id)
//       .then((item) => {
//         changeLikeCount(item);
//       }).catch((err) => console.log(err));
//   }
// }





const defaultCardList = new Section({
  renderer: (item) => {

    const card = createCard(item, userId);
    defaultCardList.addItem(card);

  }
}, cardsContainerSelector);


const cards = api.getAllCards();
cards.then((cards) => {
  defaultCardList.render(cards);
}).catch((err) => console.log(`При загрузке карточек произошла ошибка:${err}`));





function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Cохранение...';
  }
  else if (!isLoading) {
    button.textContent = 'Сохранить';
  }
}



