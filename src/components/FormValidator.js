export class FormValidator {
    constructor(formSelectors, formElement) {
        this._formSelector = formSelectors.formSelector;
        this._inputSelector = formSelectors.inputSelector;
        this._submitButtonSelector = formSelectors.submitButtonSelector;
        this._inactiveButtonClass = formSelectors.inactiveButtonClass;
        this._inputErrorClass = formSelectors.inputErrorClass;
        this._errorClass = formSelectors.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        }
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
       }
    }

    resetValidation() {
        this._toggleButtonState(); 
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement) 
        });
      }
}




