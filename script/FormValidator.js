export class FormValidator {
    constructor(formSelectors) {
        this._formSelector = formSelectors.formSelector;
        this._inputSelector = formSelectors.inputSelector;
        this._submitButtonSelector = formSelectors.submitButtonSelector;
        this._inactiveButtonClass = formSelectors.inactiveButtonClass;
        this._inputErrorClass = formSelectors.inputErrorClass;
        this._errorClass = formSelectors.errorClass;
    }

    _showInputError = (form, inputElement, errorMessage) => {
        const errorElement = form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (form, inputElement) => {
        const errorElement = form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (form, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(form, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(form, inputElement);
        }
    };

    _setEventListeners = (form) => {
        const inputList = Array.from(form.querySelectorAll(this._inputSelector));
        const buttonElement = form.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(form, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation = () => {
        const forms = Array.from(document.querySelectorAll(this._formSelector));
        forms.forEach((form) => {
            this._setEventListeners(form);
        });
    };


    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        }
        else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

  
}


// const formSelectors = {
//     formSelector: '.popup__form',
//     inputSelector: '.input__text',
//     submitButtonSelector: '.popup__btn-save',
//     inactiveButtonClass: 'popup__btn-save_inactive',
//     inputErrorClass: 'input__text_type_error',
//     errorClass: 'popup__input-error_active'
// }


// const valid = new FormValidator(formSelectors);
// valid.enableValidation();

