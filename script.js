let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');

// 1) open popup
let editButton = document.querySelector('.profile__edit-button');
// reaction on click function
function editClickFunction() {
  popup.classList.add('popup_opened');
  // name laceholder = name
  document.getElementById('name').placeholder=profileName.textContent;
  // position placeholder = position
  document.getElementById('position').placeholder=profilePosition.textContent;
}
editButton.addEventListener('click', editClickFunction);

// 2) close popup
let closeButton = document.querySelector('.popup__close');
// reaction on click function
function closeClickFunction() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeClickFunction);

// 3) submit button click
let submitButton = document.querySelector('.popup__submit-button');
// reaction on click function
function submitClickFunction(evt) {
  evt.preventDefault();
  // forms values submit
  let formName = document.getElementById('name').value;
  let formPosition = document.getElementById('position').value;
  //  addtextcontent
  profileName.textContent = formName;
  profilePosition.textContent = formPosition;
  // popup close
  popup.classList.remove('popup_opened');
}
submitButton.addEventListener('click', submitClickFunction);
