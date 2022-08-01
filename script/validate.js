const formRegister = {
  inputError: 'input__text_type_error',
  errorTextActive: 'popup__input-error_active',
  inputText: '.input__text',
  submitButton: '.popup__btn-save',
  form: '.popup__form',
  submitButtonDisable: 'popup__btn-save_inactive'
}


const showInputError = (form, inputElement, errorMessage) => {
  const errorElement = form.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(formRegister.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formRegister.errorTextActive);
};

const hideInputError = (form, inputElement) => {
  const errorElement = form.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(formRegister.inputError);
  errorElement.classList.remove(formRegister.errorTextActive);
  errorElement.textContent = '';
};

const checkInputValidity = (form, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(form, inputElement);
  }
};

const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll(formRegister.inputText));
  const buttonElement = form.querySelector(formRegister.submitButton);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(form, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

};

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.body'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form'));
//     fieldsetList.forEach((fieldSet) => {
//   setEventListeners(fieldSet);
// });
//   });
// };

const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(formRegister.form));
  forms.forEach((form) => {
    setEventListeners(form);
  });
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formRegister.submitButtonDisable);
  }
  else { buttonElement.classList.remove(formRegister.submitButtonDisable); }
}


enableValidation();
