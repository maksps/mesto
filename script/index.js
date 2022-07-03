let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let exitButton = document.querySelector('.popup__btn-exit');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let input = document.querySelector('.input');
let nameInput = input.querySelector('.input__text_type_name');
let jobInput = input.querySelector('.input__text_type_job');
let formElement = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

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


editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
