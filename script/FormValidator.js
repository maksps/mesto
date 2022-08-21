export class FormValidator {
    constructor(formSelectors) {
        this._formSelector = formSelectors.formSelector;
        this._inputSelector = formSelectors;
        this._submitButtonSelector = formSelectors;
        this._inactiveButtonClass = formSelectors;
        this._inputErrorClass = formSelectors;
        this._errorClass = formSelectors;
    }

    _showInputError = (form, inputElement, errorMessage, config) => {
        const errorElement = form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(config.errorClass);
    };

    _hideInputError = (form, inputElement, config) => {
        const errorElement = form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(config.inputErrorClass);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (form, inputElement, config) => {
        if (!inputElement.validity.valid) {
            showInputError(form, inputElement, inputElement.validationMessage, config);
        } else {
            hideInputError(form, inputElement, config);
        }
    };

    _setEventListeners = (form, config) => {
        const inputList = Array.from(form.querySelectorAll(config.inputSelector));
        const buttonElement = form.querySelector(config.submitButtonSelector);
        toggleButtonState(inputList, buttonElement, config);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(form, inputElement, config);
                toggleButtonState(inputList, buttonElement, config);
            });
        });

    };

    _enableValidation = (config) => {
        const forms = Array.from(document.querySelectorAll(config.formSelector));
        forms.forEach((form) => {
            setEventListeners(form, config);
        });
    };


    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonElement, config) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(config.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        }
        else {
            buttonElement.classList.remove(config.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    enableValidation = () => {
    }


}










//   const formSelectors = {
//     formSelector: '.popup__form',
//     inputSelector: '.input__text',
//     submitButtonSelector: '.popup__btn-save',
//     inactiveButtonClass: 'popup__btn-save_inactive',
//     inputErrorClass: 'input__text_type_error',
//     errorClass: 'popup__input-error_active'
//   }
//   enableValidation(formSelectors);



