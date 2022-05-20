class Card {
  constructor(cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
};

export class DefaultCards extends Card {
  constructor(data, cardSelector, handleCardClick) {
    super(cardSelector, handleCardClick);
    this._name = data.name;
    this._link = data.link;
  };

  generateCard() {
    this._element = super._getTemplate();
    this._image = super._getImage();
    super._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__heading').textContent = this._name;
    return this._element;
  };
};
