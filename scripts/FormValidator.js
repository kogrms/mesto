export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add(this._obj.inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError = (inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove(this._obj.inputErrorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      }.bind(this));
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._obj.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  };
}
