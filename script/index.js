const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const exitButton = document.querySelector('.popup__btn-exit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const input = document.querySelector('.input');
const nameInput = input.querySelector('.input__text_type_name');
const jobInput = input.querySelector('.input__text_type_job');
const formElement = document.querySelector('.popup__form');
const elements = document.querySelector('.elements');


function createElement(name, link) {
  const template = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
  template.querySelector('.element__image').src = link;
  template.querySelector('.element__image').alt = name;
  template.querySelector('.element__text').textContent = name;
  elements.appendChild(template);

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


function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');

}
function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
}

createInitialElements();
editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


