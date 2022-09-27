export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-button');
export const nameInput = document.querySelector('.input__text_type_name');
export const jobInput = document.querySelector('.input__text_type_job');
export const formElementEdit = document.forms.profileEdit;
export const formElementAdd = document.forms.placeAdd;
export const formAvatar = document.forms.avatarChange;
export const templateSelector = '.element-template';
export const cardsContainerSelector = '.elements';
export const avatarInput = document.querySelector('.input__text_type_avatar');
export const saveButtons = document.querySelectorAll('.popup__btn-save');

export const formSelectors = {
    formSelector: '.popup__form',
    inputSelector: '.input__text',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_inactive',
    inputErrorClass: 'input__text_type_error',
    errorClass: 'popup__input-error_active'
}

export const initialCards = [
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