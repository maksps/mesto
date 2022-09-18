import '../pages/index.css' ;
import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_job');
const formElementEdit = document.forms.profileEdit;
const formElementAdd = document.forms.placeAdd;
const templateSelector = '.element-template';
const cardsContainerSelector = '.elements';

const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.input__text',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'input__text_type_error',
  errorClass: 'popup__input-error_active'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }

];

function setInputEditFormValue() {
  const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__job' });
  const userInfoContent = userInfo.getUserInfo();
  nameInput.value = userInfoContent.name;
  jobInput.value = userInfoContent.job;
}


buttonEdit.addEventListener('click', function () {
  setInputEditFormValue();
  popupEdit.open();
  profileValidation.resetValidation();
});

buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  newCardValidation.resetValidation();
});


function handleCardClick(link, name) {
  const popupPlace = new PopupWithImage(link, name, '.popup_place');
  popupPlace.setEventListeners();
  popupPlace.open();
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
profileValidation.enableValidation();
newCardValidation.enableValidation();

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateSelector, handleCardClick);
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsContainerSelector);
defaultCardList.render();


const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmitForm: (data) => {
    const card = new Card(data.placeNameInput, data.linkInput, templateSelector, handleCardClick);
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement);
  }
});
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmitForm: (data) => {
    const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__job' });
    userInfo.setUserInfo(data);
  }
});
popupEdit.setEventListeners();