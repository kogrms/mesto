import { openImagePopup } from "../scripts/index.js";

export class Card {
  constructor(photoName, photoLink, cardSelector) {
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

  _handleImageClick() {
    openImagePopup (this._photoName, this._photoLink)
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._photoLink;
    this._element.querySelector('.card__image').alt = this._photoName;
    this._element.querySelector('.card__heading').textContent = this._photoName;
    return this._element;
  }
}
