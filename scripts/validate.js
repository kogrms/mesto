// formEdit - edit form

const formList = Array.from(document.querySelectorAll('.form'));

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
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
  } else {
    buttonElement.classList.remove('form__submit-button_inactive');
  }
};

formList.forEach((formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
});


// ------------- my own try (from trainer) --------------

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = document.getElementById(`${inputElement.id}-error`);
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');

//   // console.log(formElement);
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = document.getElementById(`${inputElement.id}-error`);
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//   const buttonElement = formElement.querySelector('.form__submit-button');

//   console.log(buttonElement);

//   // console.log(buttonElement);
//   // console.log(inputList);
// //  +okay+

//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);

//     });
//   });
// };

// //  +okay+
// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//       setEventListeners(formElement)
//     // });
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//       setEventListeners(formElement)
//     });

// // ----------- from last trainer lesson for multiple forms --------------

//     // const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
//     // fieldsetList.forEach((fieldsetElement) => {
//     //   setEventListeners(fieldsetElement)
//     // });

// // ----------- from last trainer lesson for multiple forms --------------

//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('button_inactive');
//   } else {
//     buttonElement.classList.remove('button_inactive');
//   }
// };

// enableValidation();








// ------------- code from webinar ---------------

// const validateInput = (input) => {
//   const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

//   errorElement.textContent = input.ValidationMessage;

// }

// const handleInput = (event) => {
//   const currentForm = event.currentTarget;
//   const input = event.target;

//   validateInput(input);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const currentform = event.target;

//   if (currentform.checkValidity()) {
//     currentform.reset();
//   }
// };

// formEdit.addEventListener('submit', handleSubmit);

// formEdit.addEventListener('input', handleInput);


// -------------- TODO (refactor) ------------------

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
