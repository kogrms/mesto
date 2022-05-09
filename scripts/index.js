// find elements in DOM
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formEdit = popupEdit.querySelector('.form');
const inputName = formEdit.querySelector('.form__input_value_name');
const inputPosition = formEdit.querySelector('.form__input_value_position');
const formAdd = popupAdd.querySelector('.form');
const inputPhotoName = formAdd.querySelector('.form__input_value_place');
const inputPhotoLink = formAdd.querySelector('.form__input_value_link');
const cardsContainer = document.querySelector('.cards__container');
const popups = document.querySelectorAll('.popup');

import { initialCards } from '../scripts/initialCards.js';

const validationObject = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
};

import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { openPopup } from "../scripts/utils.js";
import { closePopup } from "../scripts/utils.js";

// create card
const createCard = (photoName, photoLink) => {
  // Create Card instance
  const card = new Card(photoName, photoLink, '.card-template', '.card__image');
  // Create and return card
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((item) => {
  cardsContainer.append(
    createCard (item.name, item.link)
  );
});

// render card
const renderCard = (photoName, photoLink) => {
  cardsContainer.prepend(createCard(photoName, photoLink));
};

const EditFormValidator = new FormValidator(validationObject, formEdit);
const AddFormValidator = new FormValidator(validationObject, formAdd);
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

// insert name and position in edit popup inputs
function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputPosition.value = profilePosition.textContent;
  openPopup(popupEdit);
};

// add new card
const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  formAdd.reset();
  closePopup(popupAdd);
  AddFormValidator.disableSubmitButton();
};

// edit profile info
function editProfileInfo (evt) {
  evt.preventDefault();
  // profile name and position replace by input values
  profileName.textContent = inputName.value;
  profilePosition.textContent = inputPosition.value;
  // close edit popup
  closePopup(popupEdit);
};
// edit button listener
buttonEdit.addEventListener('click', () => fillProfileInputs(popupEdit));
// add button listener
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
// close popup button listener
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
});
// submit edit handler
formEdit.addEventListener('submit', editProfileInfo);
// submit add handler
formAdd.addEventListener('submit', addCard);
