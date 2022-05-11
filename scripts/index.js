const NAME = 'name';
const DESCRIPTION = 'description';
const PROFILE_EDIT_BUTTON = '.profile__edit-button';
const POPUP = '.popup';
const POPUP_CLOSE_ICON = '.popup__close-icon';
const FORM = '.form';
const PROFILE_NAME = '.profile__name';
const PROFILE_DESCRIPTION = '.profile__description';

const editBtn = document.querySelector(PROFILE_EDIT_BUTTON);
const popup = document.querySelector(POPUP);
const closePopUp = document.querySelector(POPUP_CLOSE_ICON);
let formElement = document.querySelector(FORM);
let nameInput = document.getElementById(NAME);
let jobInput = document.getElementById(DESCRIPTION);
const profileName = document.querySelector(PROFILE_NAME);
const profileDescription = document.querySelector(PROFILE_DESCRIPTION);

const popupOpened = () => {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
const popupClosed = () => {
    popup.classList.remove("popup_opened");
}
editBtn.addEventListener('click', popupOpened)

closePopUp.addEventListener('click', popupClosed)

function formSubmitHandler(evt) {
    evt.preventDefault();

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);