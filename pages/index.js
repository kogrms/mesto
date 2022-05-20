// find elements in DOM
import {
  initialCards,
  validationObject,
  popupEdit,
  popupAdd,
  profileName,
  profilePosition,
  buttonEdit,
  buttonAdd,
  formEdit,
  inputName,
  inputPosition,
  formAdd,
  inputPhotoName,
  inputPhotoLink,
  cardsContainer,
  popups
} from '../utils/constants.js'

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js'
import { openPopup } from "../utils/utils.js";
import { closePopup } from "../utils/utils.js";

// create card
const createCard = (photoName, photoLink) => {
  const card = new Card(photoName, photoLink, '.card-template', '.card__image');
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

// // close popup button listener
// popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup__close')) {
//       closePopup(popup);
//     }
//   })
// });

// submit edit handler
formEdit.addEventListener('submit', editProfileInfo);
// submit add handler
formAdd.addEventListener('submit', addCard);
