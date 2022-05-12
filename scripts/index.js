const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopUp = document.querySelector('.popup__close-icon');
let formElement = document.getElementById('EditProfileForm');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

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