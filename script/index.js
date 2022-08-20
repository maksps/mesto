import {Card} from './Сard.js';

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
const template = document.querySelector('.element-template').content.querySelector('.element');


function setInputEditFormValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}



// function createElement(name, link) {
//   const card = template.cloneNode(true);
//   const elementImage = card.querySelector('.element__image');
//   elementImage.src = link;
//   elementImage.alt = name;
//   card.querySelector('.element__text').textContent = name;
//   card.querySelector('.element__btn-delete').addEventListener('click', deleteElement);
//   card.querySelector('.element__like').addEventListener('click', addRemoveLike);
//   elementImage.addEventListener('click', function () {
//     popupImage.src = link;
//     popupImage.alt = name;
//     popupFigcaption.textContent = name;
//     openPopup(popupPlace);
//   });
//   return card;
// }

function createInitialElements() {
  
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
  
  initialCards.forEach(function (item) {
    const card = new Card(item.name, item.link, template );
    cardsContainer.prepend(card.createCard());
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


// function deleteElement(event) {
//   const element = event.target.closest('.element');
//   element.remove();
// }

function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}
function resetFormElementAdd() {
  formElementAdd.reset();
  buttonSaveAdd.classList.add('popup__btn-save_inactive');
  buttonSaveAdd.setAttribute('disabled', true);
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createElement(placeNameInput.value, linkInput.value));
  closePopup(popupAdd);
  resetFormElementAdd();
}

// function addRemoveLike(event) {
//   const elementLike = event.target.closest('.element__like');
//   elementLike.classList.toggle('element__like_checked');
// }

setInputEditFormValue();
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
});

buttonAdd.addEventListener('click', () => openPopup(popupAdd));



