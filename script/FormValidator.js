export class FormValidator {
    constructor(formSelectors, formElement) {
        this._formSelector = formSelectors.formSelector;
        this._inputSelector = formSelectors.inputSelector;
        this._submitButtonSelector = formSelectors.submitButtonSelector;
        this._inactiveButtonClass = formSelectors.inactiveButtonClass;
        this._inputErrorClass = formSelectors.inputErrorClass;
        this._errorClass = formSelectors.errorClass;
        this._formElement = formElement;
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
        
            this._setEventListeners(this._formElement);
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



