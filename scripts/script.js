// define initial cards info
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
// find edit popup in DOM
const popupEdit = document.querySelector('.popup_type_edit');
// find add popup in DOM
const popupAdd = document.querySelector('.popup_type_add');
// find profile name in DOM
const profileName = document.querySelector('.profile__name');
// find profile position in DOM
const profilePosition = document.querySelector('.profile__position');
// find edit button in DOM
const buttonEdit = document.querySelector('.profile__edit-button');
// find add button in DOM
const buttonAdd = document.querySelector('.profile__add-button');
// find edit form in DOM
const formEdit = popupEdit.querySelector('.form');
// find name and position inputs in edit form
const inputName = formEdit.querySelector('.form__input_value_name');
const inputPosition = formEdit.querySelector('.form__input_value_position');
// find add form in DOM
const formAdd = popupAdd.querySelector('.form');
// find name and link inputs in add form
const inputPhotoName = formAdd.querySelector('.form__input_value_name');
const inputPhotoLink = formAdd.querySelector('.form__input_value_link');
// find close button in edit popup
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
// find close button in add popup
const buttonCloseAdd = popupAdd.querySelector('.popup__close');
// find cards__container in DOM
const cardsContainer = document.querySelector('.cards__container');

//////////////////////////////////////////////////////////////////////////

const createCard = (photoName, photoLink) => {
  // find card template in DOM
  const cardTemplate = document.querySelector('#card-template').content;
  // clone card template
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__heading').textContent = photoName;
  card.querySelector('.card__image').src = photoLink;
  return card;
};
// card render
const renderCard = (photoName, photoLink) => {
  cardsContainer.prepend(createCard(photoName, photoLink));
};
// add new card
const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.value = '';
  inputPhotoLink.value = '';
}
// create initial cards
const createInitialCards = initialCards.map(function(initialCard) {
  return createCard(initialCard.name, initialCard.link);
});
cardsContainer.append(...createInitialCards);

//////////////////////////////////////////////////////////////////////////

// open edit popup
function openPopupEdit() {
  // popup__opened class add
  popupEdit.classList.add('popup_opened');
  // insert name in name input
  inputName.value = profileName.textContent;
  // insert position in position input
  inputPosition.value = profilePosition.textContent;
};
// open add popup
function openPopupAdd() {
  // popup__opened class add
  popupAdd.classList.add('popup_opened');
};
// close edit popup
function closePopupEdit() {
  // popup__opened class remove
  popupEdit.classList.remove('popup_opened');
};
// close add popup
function closePopupAdd() {
  // popup__opened class remove
  popupAdd.classList.remove('popup_opened');
};
// submit edit form
function submitFormEdit (evt) {
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
// submit edit handler
formEdit.addEventListener('submit', submitFormEdit);
// submit add handler
formAdd.addEventListener('submit', addCard);
