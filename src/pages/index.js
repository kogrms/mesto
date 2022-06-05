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
  buttonAvatar,
  popupAvatar,
  avatarSave
} from '../utils/constants.js'

import { id } from "../utils/id";

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { Api } from '../components/Api';


//////////////////////////////////////////////////////////////////////////////

function createCard(item) {
  const card = new Card(item, '.card-template', like, disike, currentId,
    () => {
      confirmPopup.openPopup();
      confirmPopup.handler(() =>
        api.deleteCard(item._id)
        .then(() => card.removeCard())
        .catch(err => console.log(err)))
    },
    () => {
      imagePopup.openPopup({ name: item.name, link: item.link });
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

//////////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////

const api = new Api(id);
api.getUserInfo()
    .then((data) => {
        userInfo.setUserAvatar(data.avatar)
        userInfo.setUserInfo(data.name, data.about);
    })
    .catch((err) =>
        console.log(err)
    );

api.getInitialCard()
    .then((items) => {
        cardList.renderItems(items.reverse());
    })
    .catch((err) =>
        console.log(err)
    );

//////////////////////////////////////////////////////////////////////////////


const editFormValidator = new FormValidator(validationObject, formEdit);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObject, formAdd);
addFormValidator.enableValidation();

const userInfo = new UserInfo('.profile__name', '.profile__position');


///////////////////////////////////////////////////////////////////////////////

const confirmPopup = new PopupWithConfirmation('.popup_type_confirm');
confirmPopup.setEventListeners();

const newAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  // handleFormSubmit: (formData) => {
  //     renderLoading(true, avatarSave)
      // api.createNewAvatar(formData.link)
      //     .then((link) => {
      //         userInfo.setUserAvatar(link.avatar)
      //         newAvatar.closePopup();
      //     })
      //     .catch((err) => console.log(err))
      //     .finally(() => {
      //         renderLoading(false, avatarSaveButton, "Сохранить")
      //     });
  // }
})
newAvatar.setEventListeners();

////////////////////////////////////////////////////////////////////////////////

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
buttonAvatar.addEventListener('click', () => {
  newAvatar.open();
});
