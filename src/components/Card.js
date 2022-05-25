export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };

  _getImage() {
    const cardImage = this._element.querySelector('.card__image');
    return cardImage;
  };

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  };

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  };

  _setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._getImage();
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__heading').textContent = this._name;
    return this._element;
  };
};
