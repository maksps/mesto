const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('input__text_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove('input__text_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll('.input__text'));
  const buttonElement = form.querySelector('.popup__btn-save');
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
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    forms.forEach((form) => {
  setEventListeners(form);
});
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement) =>{
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__btn-save_inactive');
  }
  else{ buttonElement.classList.remove('popup__btn-save_inactive');}
}


enableValidation();
