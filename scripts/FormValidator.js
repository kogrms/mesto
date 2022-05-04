export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
  }





}



const showInputError = (inputElement, errorMessage, obj) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, obj) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(inputElement, obj);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
        checkInputValidity(inputElement, obj);
        toggleButtonState(inputList, buttonElement, obj);
      });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
});
