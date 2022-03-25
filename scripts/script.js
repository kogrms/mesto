let popup = document.querySelector('.popup');
// find profile name in DOM
let profileName = document.querySelector('.profile__name');
// find profile position in DOM
let profilePosition = document.querySelector('.profile__position');
// find edit button in DOM
let editButton = document.querySelector('.profile__edit-button');
// find form in DOM
let formElement = document.querySelector('.form');
// find inputs in form
let nameInput = formElement.querySelector('.form__input_value_name');
let positionInput = formElement.querySelector('.form__input_value_position');
// find close button in popup
let closeButton = popup.querySelector('.popup__close');

// 1) open popup
function editClickFunction() {
  // popup__opened class add
  popup.classList.add('popup_opened');
  // insert name in name input
  nameInput.value = profileName.textContent;
  // insert position in position input
  positionInput.value = profilePosition.textContent;
}

// 2) close popup
function closeClickFunction() {
  // popup__opened class remove
  popup.classList.remove('popup_opened');
}

// 3) submit form
function submitFormFunction (evt) {
  evt.preventDefault();
  // profile name and position replace by input values
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;
  // close popup
  closeClickFunction();
}

// edit button listener
editButton.addEventListener('click', editClickFunction);
// close button listener
closeButton.addEventListener('click', closeClickFunction);
// submit handler
formElement.addEventListener('submit', submitFormFunction);
