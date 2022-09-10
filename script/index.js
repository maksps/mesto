import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
// import { PopupWithImage } from './PopupWithImage.js'
// import { PopupWithForm } from './PopupWithForm.js';
// import { UserInfo } from './UserInfo';

const popupAdd = new Popup('.popup_add');
popupAdd.setEventListeners();
const popupEdit = new Popup('.popup_edit');
popupEdit.setEventListeners();
const popupPlace = new Popup('.popup_place');
popupPlace.setEventListeners();

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_job');
const placeNameInput = document.querySelector('.input__text_type_placename');
const linkInput = document.querySelector('.input__text_type_link');
const formElementEdit = document.forms.profileEdit;
const formElementAdd = document.forms.placeAdd;
const cardsContainer = document.querySelector('.elements');
// const popupPlace = document.querySelector('.popup_place');
// const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const buttonSaveEdit = formElementEdit.querySelector('.popup__btn-save');
const buttonSaveAdd = formElementAdd.querySelector('.popup__btn-save');

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
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function createCard(name, link) {
  const card = new Card(name, link, templateSelector, cardClickHandler);
  return card.createCard();
}

function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  popupEdit.close();
}

function resetFormElementAdd() {
  formElementAdd.reset();
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(placeNameInput.value, linkInput.value));
  popupAdd.close();
  resetFormElementAdd();
}


formElementEdit.addEventListener('submit', makeSubmitHandler);
formElementAdd.addEventListener('submit', makeSubmitCreateElement);

buttonEdit.addEventListener('click', function () {
  
  popupEdit.open();
  setInputEditFormValue();
  profileValidation.resetValidation();
});

buttonAdd.addEventListener('click', function () {
  popupAdd.open();
  newCardValidation.resetValidation();
});


function cardClickHandler(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupFigcaption.textContent = name;
  popupPlace.open();
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);
profileValidation.enableValidation();
newCardValidation.enableValidation();

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateSelector, cardClickHandler);
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement);
    
  }
}, cardsContainerSelector);

defaultCardList.render();



