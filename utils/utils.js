import {
  popupImage,
  popupImageCaption,
  popupImagePhoto
} from './constants.js';

// close popup
export function closePopup(somePopup) {
  const inputs = Array.from(somePopup.querySelectorAll('.form__input'));
  somePopup.classList.remove('popup_opened');
  // remove esc button event listener
  window.removeEventListener('keydown', closeByEscape);
  // remove click on popup overlay event listener
  somePopup.removeEventListener('click', closeByClickOverlay);
  // clear input errors
  inputs.forEach((inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
  });
};

// close popup by escape
// export function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

// close popup by click on popup overlay
// export function closeByClickOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

// open popup
// export function openPopup(somePopup) {
//   somePopup.classList.add('popup_opened');
//   somePopup.addEventListener('click', closeByClickOverlay);
// };

// open image popup
export function openImagePopup (photoName, photoLink) {
  openPopup(popupImage);
  popupImageCaption.textContent = photoName;
  popupImagePhoto.src = photoLink;
  popupImagePhoto.alt = photoName;
}
