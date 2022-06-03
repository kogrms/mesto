import './index.css';
import {
  initialCards,
  validationObject,
  buttonEdit,
  buttonAdd,
  formEdit,
  inputName,
  inputPosition,
  formAdd,
} from '../utils/constants.js'

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

function createCard(item) {
  const card = new Card(item, '.card-template',
    () => {imagePopup.open({ name: item.name, link: item.link })},
    () => confirmPopup.open()
  );
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

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();




const confirmPopup = new PopupWithConfirmation('.popup_type_confirm');
confirmPopup.setEventListeners();




const editFormValidator = new FormValidator(validationObject, formEdit);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObject, formAdd);
addFormValidator.enableValidation();

const userInfo = new UserInfo('.profile__name', '.profile__position');

const newProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.position);
    newProfile.close();
  }
});
newProfile.setEventListeners();

const newCard = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard({ name: formData.place, link: formData.link }));
    newCard.close();
  }
});
newCard.setEventListeners();

const editProfile = () => {
  inputName.value = userInfo.getUserInfo().profileNameInput;
  inputPosition.value = userInfo.getUserInfo().profileInfoInput;
  newProfile.open();
  editFormValidator.resetValidation();
};

// edit button listener
buttonEdit.addEventListener('click', editProfile);

// add button listener
buttonAdd.addEventListener('click', () => {
  newCard.open();
  addFormValidator.resetValidation();
});



// edit avatar listener
buttonEdit.addEventListener('click', editProfile);
