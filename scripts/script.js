// define initial cards info
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
const initialCardsNames = initialCards.map(el => el.name);
const initialCardsLinks = initialCards.map(el => el.link);
const initialCardsAlts = initialCards.map(el => el.alt);
console.log(initialCardsNames);
console.log(initialCardsLinks);
console.log(initialCardsAlts);

// find cards__container in DOM
const cardsContainer = document.querySelector('.cards__container');
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
// find close button in edit popup
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
// find close button in add popup
const buttonCloseAdd = popupAdd.querySelector('.popup__close');

// create card template
const createCard = (photoName, photoLink, photoAlt) => {
  return `<li class="card">
  <button type="button" class="card__delete" aria-label="Кнопка удаления фотографии"></button>
  <img class="card__image" src="" alt="">
  <div class="card__info">
    <h3 class="card__heading"></h3>
    <button type="button" class="card__like" aria-label="Кнопка оценки фотографии"></button>
  </div>
</li>`
};

const renderCards = () => {

}




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


// submit add form


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
