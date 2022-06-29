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
  popup.style.display = "block";
}
function closePopup() {
  popup.style.display = "none";
}

editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
