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




function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
profileValidation.enableValidation();
newCardValidation.enableValidation();



function createCard(item) {
  const card = new Card(item.name, item.link, templateSelector, handleCardClick, api);
  const cardMarkup = card.createCardMarkup();
  card.setButtonDelete(popupWithConfirm, item);
  return cardMarkup;
}


const popupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmitForm: (data) => {
    userInfo.setUserInfo(data);
  }
});
popupEdit.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_place');
popupWithImage.setEventListeners();

const popupWithConfirm = new PopupWithConfirm('.popup_confirm');
popupWithConfirm.setEventListeners();

const api = new Api(
  {
    url: 'https://mesto.nomoreparties.co/v1/cohort-50/cards',
    headers: {
      authorization: '6df29fdd-ef30-40f2-9646-a62800cbaefa',
      'content-type': 'application/json',
    },
  })

const cards = api.getAllCards();

cards.then((cards) => {
  const defaultCardList = new Section({
    items: cards,
    renderer: (item) => {
      const card = createCard(item);
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
    handleSubmitForm: (data) => {

      const newCard = api.addCard(data);
      newCard.then((item) => {
        const card = createCard(item);
        defaultCardList.addItem(card);
      })
      
    }
  });
  popupAdd.setEventListeners();

// cards.forEach((card) => {

//   console.log(card._id);
// })

}).catch((err) => alert(err));



