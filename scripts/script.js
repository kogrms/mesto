// set initial cards info
const initialCards = [
  {
    name: 'Санкт-Петербург',
    link: './images/spb.jpg',
    alt: 'Дворцовая площадь Санкт-Петербурга'
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg',
    alt: 'Деловой центр Москва-Сити'
  },
  {
    name: 'Кижи',
    link: './images/kizhy.jpg',
    alt: 'Архитектурный ансамбль погоста Кижи'
  },
  {
    name: 'Хибины',
    link: './images/khibiny.jpg',
    alt: 'Заснеженные Хибины'
  },
  {
    name: 'Мурманск',
    link: './images/murmansk.jpg',
    alt: 'Памятник Защитникам Советского Заполярья'
  },
  {
    name: 'Кронштадт',
    link: './images/kronshtadt.jpg',
    alt: 'Морской Никольский собор'
  }
];

// find elements__container in DOM
const cardsContainer = document.querySelector('.cards__container');
// find popup-edit in DOM
const popupEdit = document.querySelector('.popup-edit');
// find popup-add in DOM
const popupAdd = document.querySelector('.popup-add');
// find profile name in DOM
const profileName = document.querySelector('.profile__name');
// find profile position in DOM
const profilePosition = document.querySelector('.profile__position');
// find edit button in DOM
const buttonEdit = document.querySelector('.profile__edit-button');
// find add button in DOM
const buttonAdd = document.querySelector('.profile__add-button');
// find form in DOM
const formElement = document.querySelector('.form');
// find name and position inputs in form
const inputName = formElement.querySelector('.form__input_value_name');
const inputPosition = formElement.querySelector('.form__input_value_position');
// find close button in popup-edit
const buttonCloseEdit = popupEdit.querySelector('.popup-edit__close');
// find close button in popup-add
const buttonCloseAdd = popupAdd.querySelector('.popup-add__close');

// 1) open popup-edit
function openPopupEdit() {
  // popup-edit__opened class add
  popupEdit.classList.add('popup-edit_opened');
  // insert name in name input
  inputName.value = profileName.textContent;
  // insert position in position input
  inputPosition.value = profilePosition.textContent;
}

// 2) open popup-add
function openPopupAdd() {
  // popup-add__opened class add
  popupAdd.classList.add('popup-add_opened');
}

// 3) close popup-edit
function closePopupEdit() {
  // popup-edit__opened class remove
  popupEdit.classList.remove('popup-edit_opened');
}

// 4) close popup-add
function closePopupAdd() {
  // popup-add__opened class remove
  popupAdd.classList.remove('popup-add_opened');
}

// 5) submit edit form
function submitFormEdit (evt) {
  evt.preventDefault();
  // profile name and position replace by input values
  profileName.textContent = inputName.value;
  profilePosition.textContent = inputPosition.value;
  // close popup-edit
  closePopupEdit();
}

// 5) submit add form

// edit button listener
buttonEdit.addEventListener('click', openPopupEdit);
// add button listener
buttonAdd.addEventListener('click', openPopupAdd);
// close edit button listener
buttonCloseEdit.addEventListener('click', closePopupEdit);
// close add button listener
buttonCloseAdd.addEventListener('click', closePopupAdd);
// submit edit handler
formElement.addEventListener('submit', submitFormEdit);

// submit add handler
