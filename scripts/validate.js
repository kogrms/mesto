
const showInputError = (inputElement, errorMessage) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.textContent = '';
};

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit-button_inactive');
      buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove('form__submit-button_inactive');
      buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
        checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement);
      });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
