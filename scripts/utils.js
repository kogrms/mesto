const popupImage = document.querySelector('.popup_type_image');
const popupImageCaption = popupImage.querySelector('.popup__caption');
const popupImagePhoto = popupImage.querySelector('.popup__photo');

// close popup
export function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');
  // remove esc button event listener
  window.removeEventListener('keydown', closeByEscape);
  // remove click on popup overlay event listener
  somePopup.removeEventListener('click', closeByClickOverlay);
};

// close popup by escape
export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// close popup by click on popup overlay
export function closeByClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// open popup
export function openPopup(somePopup) {
  somePopup.classList.add('popup_opened');
  // add esc button event listener
  window.addEventListener('keydown', closeByEscape);
  // add click on popup overlay event listener
  somePopup.addEventListener('click', closeByClickOverlay);
};

// open image popup
export function openImagePopup (photoName, photoLink) {
  openPopup(popupImage);
  popupImageCaption.textContent = photoName;
  popupImagePhoto.src = photoLink;
  popupImagePhoto.alt = photoName;
}
