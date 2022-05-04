export class Card {
  constructor(photoName, photoLink, cardSelector) {
      this._photoName = photoName;
      this._photoLink = photoLink;
      this._cardSelector = cardSelector;
      // this._openPopup = openPopup(popup);
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
      this._handleImageClick();
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
    // this._openPopup(document.querySelector('.popup_type_image'));
    // popupImageCaption.textContent = photoName;
    // popupImagePhoto.src = photoLink;
    // popupImagePhoto.alt = photoName;
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
