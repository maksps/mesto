import '../pages/index.css' ;
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {buttonEdit, buttonAdd, nameInput, jobInput, formElementEdit,
   formElementAdd, templateSelector, cardsContainerSelector, formSelectors, initialCards} from '../utils/constants.js';

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
  const popupPlace = new PopupWithImage('.popup_place');
  popupPlace.setEventListeners();
  popupPlace.open(link, name);
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