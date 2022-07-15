const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editButton = document.querySelector('.profile__edit-button');
const exitEditButton = popupEdit.querySelector('.popup__btn-exit');
const exitAddButton = popupAdd.querySelector('.popup__btn-exit');
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
const popupPlace = document.querySelector('.popup-place');
const exitPlaceButton = popupPlace.querySelector('.popup-place__btn-exit');


function createElement(name, link) {
  const template = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
  template.querySelector('.element__image').src = link;
  template.querySelector('.element__image').alt = name;
  template.querySelector('.element__text').textContent = name;
  elements.insertBefore(template, elements.firstChild);
  template.querySelector('.element__btn-delete').addEventListener('click', () => { template.remove(); });
  template.querySelector('.element__like').addEventListener('click', (event) => { event.target.classList.toggle('element__like_checked') });
  template.querySelector('.element__image').addEventListener('click', function (event) {
    popupPlace.classList.toggle('popup-place_opened');
    popupPlace.querySelector('.popup-place__image').src = link;
    popupPlace.querySelector('.popup-place__figcaption').textContent = name;
    document.formAdd.reset();

  });


}


function addLike(event) {
  template.querySelector('.element__like').classList.add('.element__like_checked');
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
    createElement(item.name, item.link)
  });

}


function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEdit.classList.add('popup_opened');
}

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
  placeNameInput.value = '';
  linkInput.value = '';

}


function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function closePopupPlace() {
  popupPlace.classList.remove('popup-place_opened');

}



function formSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopupEdit();
}

function formSubmitCreateElement(evt) {
  evt.preventDefault();
  createElement(placeNameInput.value, linkInput.value);
  closePopupAdd();
}

createInitialElements();
editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd)
exitEditButton.addEventListener('click', closePopupEdit);
exitAddButton.addEventListener('click', closePopupAdd);
formElement.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', formSubmitCreateElement);
exitPlaceButton.addEventListener('click', closePopupPlace);




