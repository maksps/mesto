const formRegister = {
  formSelector: '.popup__form',
  inputSelector: '.input__text',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'input__text_type_error',
  errorClass: 'popup__input-error_active'
}

const showInputError = (formSelector, inputElement, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(formRegister.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formRegister.errorClass);
};

const hideInputError = (formSelector, inputElement) => {
  const errorElement = formSelector.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(formRegister.inputErrorClass);
  errorElement.classList.remove(formRegister.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formSelector, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formSelector, inputElement);
  }
};

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(formRegister.inputSelector));
  const buttonElement = formSelector.querySelector(formRegister.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formSelector, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

};

const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(formRegister.formSelector));
  forms.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formRegister.inactiveButtonClass);
  }
  else { buttonElement.classList.remove(formRegister.inactiveButtonClass); }
}


enableValidation();
