const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
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

function createElement(name, link) {
  const template = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
  const elementImage = template.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  template.querySelector('.element__text').textContent = name;
  template.querySelector('.element__btn-delete').addEventListener('click', deleteElement);
  template.querySelector('.element__like').addEventListener('click', addRemoveLike);
  template.querySelector('.element__image').addEventListener('click', function () {
    popupPlace.querySelector('.popup__image').src = link;
    popupPlace.querySelector('.popup__figcaption').textContent = name;
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
    elements.insertBefore(createElement(item.name, item.link), elements.firstChild);
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popups.forEach(function (popup) {
    popup.classList.remove('popup_opened');
  });
}

function deleteElement(event) {
  const element = event.target.closest('.element');
  element.remove();
}

function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  elements.insertBefore(createElement(placeNameInput.value, linkInput.value), elements.firstChild);
  closePopup();
  placeNameInput.value = '';
  linkInput.value = '';
}

function addRemoveLike(event) {
  const like = event.target.closest('.element__like');
  like.classList.toggle('element__like_checked');
}



createInitialElements();
formElement.addEventListener('submit', makeSubmitHandler);
formAdd.addEventListener('submit', makeSubmitCreateElement);

popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__btn-exit')) {
      closePopup()
    }
  })
});


popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__btn-exit')) {
      closePopup()
    }
  })
});

editButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});


addButton.addEventListener('click', ()=> openPopup(popupAdd));






