const initialCards = [
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
    link: './images/kronshtadt.jpg',
  }
];
// find elements in DOM
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup-image');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formEdit = popupEdit.querySelector('.form');
const inputName = formEdit.querySelector('.form__input_value_name');
const inputPosition = formEdit.querySelector('.form__input_value_position');
const formAdd = popupAdd.querySelector('.form');
const inputPhotoName = formAdd.querySelector('.form__input_value_name');
const inputPhotoLink = formAdd.querySelector('.form__input_value_link');
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
const buttonCloseAdd = popupAdd.querySelector('.popup__close');
const buttonCloseImage = popupImage.querySelector('.popup-image__close');
const cardsContainer = document.querySelector('.cards__container');

// open image popup
function openPopupImage() {
  popupImage.classList.add('popup-image_opened');
};

// create card
const createCard = (photoName, photoLink) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__heading').textContent = photoName;
  card.querySelector('.card__image').src = photoLink;
  card.querySelector('.card__delete').addEventListener('click', () => {
    card.remove();
  });
  const buttonLike = card.querySelector('.card__like');
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('card__like_active');
  });
  const image = card.querySelector('.card__image');
  image.addEventListener('click', () => {
    openPopupImage();
    popupImage.querySelector('.popup-image__caption').textContent = photoName;
    popupImage.querySelector('.popup-image__photo').src = photoLink;
  });
  return card;
};

// render card
const renderCard = (photoName, photoLink) => {
  cardsContainer.prepend(createCard(photoName, photoLink));
};

// close add popup
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
};

// add new card
const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.value = '';
  inputPhotoLink.value = '';
  closePopupAdd();
}

// create initial cards
const createInitialCards = initialCards.map(function(initialCard) {
  return createCard(initialCard.name, initialCard.link);
});
cardsContainer.append(...createInitialCards);

// open edit popup
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  // insert name and position in inputs
  inputName.value = profileName.textContent;
  inputPosition.value = profilePosition.textContent;
};
// open add popup
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
};
// close edit popup
function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
};
// close image popup
function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
};
// edit profile info
function editProfileInfo (evt) {
  evt.preventDefault();
  // profile name and position replace by input values
  profileName.textContent = inputName.value;
  profilePosition.textContent = inputPosition.value;
  // close edit popup
  closePopupEdit();
};
// edit button listener
buttonEdit.addEventListener('click', openPopupEdit);
// add button listener
buttonAdd.addEventListener('click', openPopupAdd);
// close edit button listener
buttonCloseEdit.addEventListener('click', closePopupEdit);
// close add button listener
buttonCloseAdd.addEventListener('click', closePopupAdd);
// close image button listener
buttonCloseImage.addEventListener('click', closePopupImage);
// submit edit handler
formEdit.addEventListener('submit', editProfileInfo);
// submit add handler
formAdd.addEventListener('submit', addCard);
