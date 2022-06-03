import spb from '../images/spb.jpg';
import msk from '../images/moscow.jpg';
import kij from '../images/kizhy.jpg';
import hib from '../images/khibiny.jpg';
import mur from '../images/murmansk.jpg';
import kro from '../images/kronshtadt.jpg';

export const initialCards = [
  {
    name: 'Санкт-Петербург',
    link: spb,
  },
  {
    name: 'Москва',
    link: msk,
  },
  {
    name: 'Кижи',
    link: kij,
  },
  {
    name: 'Хибины',
    link: hib,
  },
  {
    name: 'Мурманск',
    link: mur,
  },
  {
    name: 'Кронштадт',
    link: kro
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
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const formEdit = popupEdit.querySelector('.form');
export const inputName = formEdit.querySelector('.form__input_value_name');
export const inputPosition = formEdit.querySelector('.form__input_value_position');
export const formAdd = popupAdd.querySelector('.form');
export const buttonAvatar = document.querySelector('.profile__avatar-edit-button');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const avatarSave = popupAvatar.querySelector(".form__submit-button");
