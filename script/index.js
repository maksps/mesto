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
const formElement = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const elements = document.querySelector('.elements');
const popupPlace = document.querySelector('.popup_place');
const popups = document.querySelectorAll('.popup');
const popupImage = popupPlace.querySelector('.popup__image');
const popupFigcaption = popupPlace.querySelector('.popup__figcaption');
const buttonSaveEdit = popupEdit.querySelector('.popup__btn-save');

function createElement(name, link) {
  const template = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
  const elementImage = template.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  template.querySelector('.element__text').textContent = name;
  template.querySelector('.element__btn-delete').addEventListener('click', deleteElement);
  template.querySelector('.element__like').addEventListener('click', addRemoveLike);
  template.querySelector('.element__image').addEventListener('click', function () {
    popupImage.src = link;
    popupImage.alt = name;
    popupFigcaption.textContent = name;
    openPopup(popupPlace);
  });
  return template;
}

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
    elements.prepend(createElement(item.name, item.link));
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};


function deleteElement(event) {
  const element = event.target.closest('.element');
  element.remove();
}

function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  elements.prepend(createElement(placeNameInput.value, linkInput.value));
  closePopup(popupAdd);
  placeNameInput.value = '';
  linkInput.value = '';
}

function addRemoveLike(event) {
  const elementLike = event.target.closest('.element__like');
  elementLike.classList.toggle('element__like_checked');
}


createInitialElements();
formElement.addEventListener('submit', makeSubmitHandler);
formAdd.addEventListener('submit', makeSubmitCreateElement);


popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__btn-exit') || event.target.classList.contains('popup') ) {
      closePopup(event.target.closest('.popup'));
    }
  })
  document.addEventListener('keydown', function (evt) {
    if(evt.key === 'Escape'){
      closePopup(popup);}
    ;})
});

buttonEdit.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  buttonSaveEdit.classList.remove('popup__btn-save_inactive')
});


buttonAdd.addEventListener('click', () => openPopup(popupAdd));



