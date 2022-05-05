export class Card {
  constructor(photoName, photoLink, cardSelector, openImagePopup) {
      this._photoName = photoName;
      this._photoLink = photoLink;
      this._cardSelector = cardSelector;
      this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImageClick(this._photoName, this._photoLink);
    });
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  // open image popup
  _handleImageClick() {
    const popupImage = document.querySelector('.popup_type_image');
    popupImage.querySelector('.popup__caption').textContent = this._photoName;
    popupImage.querySelector('.popup__photo').alt = this._photoName;
    popupImage.querySelector('.popup__photo').src = this._photoLink;
    openPopup(popupImage)
    // add esc button event listener
    window.addEventListener('keydown', this._closeByEscape());
    // add click on popup overlay event listener
    popupImage.addEventListener('click', this._closeByClickOverlay());
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // добавим обработчики
    this._setEventListeners();
    // Добавим данные
    this._element.querySelector('.card__image').src = this._photoLink;
    this._element.querySelector('.card__image').alt = this._photoName;
    this._element.querySelector('.card__heading').textContent = this._photoName;
    // Вернём элемент наружу
    return this._element;
  }
}
