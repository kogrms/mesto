export const initialCards = [
  {
    name: 'Санкт-Петербург',
    link: './images/spb.jpg',
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg',
  },
  {
    name: 'Кижи',
    link: './images/kizhy.jpg',
  },
  {
    name: 'Хибины',
    link: './images/khibiny.jpg',
  },
  {
    name: 'Мурманск',
    link: './images/murmansk.jpg',
  },
  {
    name: 'Кронштадт',
    link: './images/kronshtadt.jpg'
  }
];

export const validationObject = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error'
};

export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const profileName = document.querySelector('.profile__name');
export const profilePosition = document.querySelector('.profile__position');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const formEdit = popupEdit.querySelector('.form');
export const inputName = formEdit.querySelector('.form__input_value_name');
export const inputPosition = formEdit.querySelector('.form__input_value_position');
export const formAdd = popupAdd.querySelector('.form');
export const inputPhotoName = formAdd.querySelector('.form__input_value_place');
export const inputPhotoLink = formAdd.querySelector('.form__input_value_link');
export const cardsContainer = document.querySelector('.cards__container');
export const popups = document.querySelectorAll('.popup');
export const popupImage = document.querySelector('.popup_type_image');
export const popupImageCaption = popupImage.querySelector('.popup__caption');
export const popupImagePhoto = popupImage.querySelector('.popup__photo');
