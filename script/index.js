import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = popupEdit.querySelector('.input__text_type_name');
const jobInput = popupEdit.querySelector('.input__text_type_job');
const placeNameInput = popupAdd.querySelector('.input__text_type_placename');
const linkInput = popupAdd.querySelector('.input__text_type_link');
const formElementEdit = popupEdit.querySelector('.popup__form');
const formElementAdd = popupAdd.querySelector('.popup__form');
const cardsContainer = document.querySelector('.elements');
const popupPlace = document.querySelector('.popup_place');
const popups = document.querySelectorAll('.popup');
const popupImage = popupPlace.querySelector('.popup__image');
const popupFigcaption = popupPlace.querySelector('.popup__figcaption');
const buttonSaveEdit = popupEdit.querySelector('.popup__btn-save');
const buttonSaveAdd = popupAdd.querySelector('.popup__btn-save');

const templateSelector = '.element-template';





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

function createInitialElements() {
  initialCards.forEach(function (item) {
    cardsContainer.prepend(createCard(item.name, item.link));
  });
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
};


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}

function resetFormElementAdd() {
  formElementAdd.reset();
  // buttonSaveAdd.classList.add('popup__btn-save_inactive');
  // buttonSaveAdd.setAttribute('disabled', true);
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(placeNameInput.value, linkInput.value));
  closePopup(popupAdd);
  resetFormElementAdd();
}

createInitialElements();
formElementEdit.addEventListener('submit', makeSubmitHandler);
formElementAdd.addEventListener('submit', makeSubmitCreateElement);


popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__btn-exit') || event.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
});

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  setInputEditFormValue();
  profileValidation.enableValidation();
});

buttonAdd.addEventListener('click', function(){
   openPopup(popupAdd);
    newCardValidation.enableValidation()});


function cardClickHandler (link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupFigcaption.textContent = name;
  openPopup(popupPlace);
}

const profileValidation = new FormValidator(formSelectors, formElementEdit);
const newCardValidation = new FormValidator(formSelectors, formElementAdd);



