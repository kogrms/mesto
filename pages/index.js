import {
  initialCards,
  validationObject,
  popupEdit,
  popupAdd,
  buttonEdit,
  buttonAdd,
  formEdit,
  inputName,
  inputPosition,
  formAdd,
  popupImage
} from '../utils/constants.js'

import { DefaultCards } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js'
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'

function createCard(item) {
  const card = new DefaultCards(item, '.card-template', () => {
    imagePopups.open({ name: item.name, link: item.link });
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},
'.cards__container');
cardList.renderItems();

const imagePopups = new PopupWithImage(popupImage);
imagePopups.setEventListeners();

const editFormValidator = new FormValidator(validationObject, formEdit);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObject, formAdd);
addFormValidator.enableValidation();

const userInfo = new UserInfo();

const newProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.position);
  }
});
newProfile.setEventListeners();

const newCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    console.log(formData);
    cardList.addItem(createCard({ name: formData.place, link: formData.link }));
  }
});
newCard.setEventListeners();

// edit button listener
buttonEdit.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().profileNameInput;
  inputPosition.value = userInfo.getUserInfo().profileInfoInput;
  newProfile.open();
  editFormValidator.resetValidation();
});

// add button listener
buttonAdd.addEventListener('click', () => {
  newCard.open();
  addFormValidator.resetValidation();
});
