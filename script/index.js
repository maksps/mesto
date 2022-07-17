const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editButton = document.querySelector('.profile__edit-button');
// const exitEditButton = popupEdit.querySelector('.popup__btn-exit');
// const exitAddButton = popupAdd.querySelector('.popup__btn-exit');
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
// const exitPlaceButton = popupPlace.querySelector('.popup__btn-exit');
// const exitButton = document.querySelectorAll('.popup__btn-exit');
const popups = document.querySelectorAll('.popup');
const exitButton = document.querySelectorAll('.popup__btn-exit');
const buttons = document.querySelectorAll('.button');

function createElement(name, link) {
  const template = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
  const elementImage = template.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt = name;
  template.querySelector('.element__text').textContent = name;
  elements.insertBefore(template, elements.firstChild);
  template.querySelector('.element__btn-delete').addEventListener('click', () => { template.remove(); });
  template.querySelector('.element__like').addEventListener('click', (event) => { event.target.classList.toggle('element__like_checked') });
  template.querySelector('.element__image').addEventListener('click', function (event) {
    openPopup(popupPlace);
    popupPlace.querySelector('.popup__image').src = link;
    popupPlace.querySelector('.popup__figcaption').textContent = name;
  });


}


// function addLike(event) {
//   template.querySelector('element__like').classList.toggle('element__like_checked');
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
    createElement(item.name, item.link)
  });
}



function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function closePopup() {
  popups.forEach(function (popup) {
    popup.classList.remove('popup_opened');
    // if(popup.classList.contains('popup_opened')){popup.classList.remove('popup_opened')};
  });
}



function makeSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
}

function makeSubmitCreateElement(evt) {
  evt.preventDefault();
  createElement(placeNameInput.value, linkInput.value);
  closePopup();
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

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.classList.contains('profile__edit-button')) {
      nameInput.value = profileName.textContent;
      jobInput.value = profileJob.textContent;
      openPopup(popupEdit);
    }
    else if (event.target.classList.contains('profile__add-button')) {
      placeNameInput.value = '';
      linkInput.value = '';
      openPopup(popupAdd);
    }
  })
});



