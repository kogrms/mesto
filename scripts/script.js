// find elements in DOM
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formEdit = popupEdit.querySelector('.form');
const inputName = formEdit.querySelector('.form__input_value_name');
const inputPosition = formEdit.querySelector('.form__input_value_position');
const formAdd = popupAdd.querySelector('.form');
const inputPhotoName = formAdd.querySelector('.form__input_value_place');
const inputPhotoLink = formAdd.querySelector('.form__input_value_link');
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
const buttonCloseAdd = popupAdd.querySelector('.popup__close');
const buttonCloseImage = popupImage.querySelector('.popup__close');
const cardsContainer = document.querySelector('.cards__container');

// close popup by escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// close popup by click on popup overlay
function closeByClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// open popup
function openPopup(somePopup) {
  somePopup.classList.add('popup_opened');
  // add esc button event listener
  window.addEventListener('keydown', closeByEscape);
  // add click on popup overlay event listener
  somePopup.addEventListener('click', closeByClickOverlay);
};

// insert name and position in edit popup inputs
function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputPosition.value = profilePosition.textContent;
  openPopup(popupEdit);
};

// close popup
function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');
  // remove esc button event listener
  window.removeEventListener('keydown', closeByEscape);
  // remove click on popup overlay event listener
  somePopup.removeEventListener('click', closeByClickOverlay);

  // // reset form
  if (!somePopup.classList.contains('popup_type_image')) {
    somePopup.querySelector('.form').reset();
  };
  // remove errors
  const errorList = Array.from(somePopup.querySelectorAll('.form__input-error'));
  errorList.forEach((error) => error.textContent = '');
  // remove error class for inputs
  const inputList = Array.from(somePopup.querySelectorAll('.form__input'));
  inputList.forEach((input) => input.classList.remove('form__input_type_error'));
  // remove inactive class for edit button
  const buttonElement = somePopup.querySelector('.form__submit-button');
  if (somePopup.classList.contains('popup_type_edit')) {
    buttonElement.classList.remove('form__submit-button_inactive');
  }
  // add inactive class for edit button
  else if (somePopup.classList.contains('popup_type_add')) {
  buttonElement.classList.add('form__submit-button_inactive');
  };
};

// create card
const createCard = (photoName, photoLink) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const image = card.querySelector('.card__image');
  card.querySelector('.card__heading').textContent = photoName;
  image.src = photoLink;
  image.alt = photoName;
  card.querySelector('.card__delete').addEventListener('click', () => {
    card.remove();
  });
  const buttonLike = card.querySelector('.card__like');
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('card__like_active');
  });
  // const image = card.querySelector('.card__image');
  image.addEventListener('click', () => {
    openPopup(popupImage);
    popupImage.querySelector('.popup__caption').textContent = photoName;
    popupImage.querySelector('.popup__photo').src = photoLink;
  });
  return card;
};

// render card
const renderCard = (photoName, photoLink) => {
  cardsContainer.prepend(createCard(photoName, photoLink));
};

// add new card
const addCard = (evt) => {
  if (!formAdd.querySelector('.form__submit-button').classList.contains('form__submit-button_inactive')) {
    evt.preventDefault();
    const photoName = inputPhotoName.value;
    const photoLink = inputPhotoLink.value;
    renderCard(photoName, photoLink);
    inputPhotoName.value = '';
    inputPhotoLink.value = '';
    closePopup(popupAdd);
  };
}

// create initial cards
const createInitialCards = initialCards.map(function(initialCard) {
  renderCard(initialCard.name, initialCard.link);
});

// edit profile info
function editProfileInfo (evt) {
  evt.preventDefault();
  // profile name and position replace by input values
  profileName.textContent = inputName.value;
  profilePosition.textContent = inputPosition.value;
  // close edit popup
  closePopup(popupEdit);
};
// edit button listener
buttonEdit.addEventListener('click', () => fillProfileInputs(popupEdit));
// add button listener
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
// close edit button listener
buttonCloseEdit.addEventListener('click', () => closePopup(popupEdit));
// close add button listener
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
// close image button listener
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
// submit edit handler
formEdit.addEventListener('submit', editProfileInfo);
// submit add handler
formAdd.addEventListener('submit', addCard);
