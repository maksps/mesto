import './index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  buttonEdit, buttonAdd, nameInput, jobInput, formElementEdit,
  formElementAdd, templateSelector, cardsContainerSelector, formSelectors, initialCards
} from '../utils/constants.js';


const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__job' });


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

buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  newCardValidation.resetValidation();
});


function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
profileValidation.enableValidation();
newCardValidation.enableValidation();



function createCard(item) {
  const card = new Card(item.name, item.link, templateSelector, handleCardClick);
  const cardElement = card.createCard();
return cardElement
}


const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item)
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
    userInfo.setUserInfo(data);
  }
});
popupEdit.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_place');
popupWithImage.setEventListeners();

