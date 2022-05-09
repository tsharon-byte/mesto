const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopUp = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.form');

const popupOpened = () => {
    popup.classList.add("popup_opened");
}
const popupClosed = () => {
    popup.classList.remove("popup_opened");
}
editBtn.addEventListener('click', popupOpened)

closePopUp.addEventListener('click', popupClosed)

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.getElementById('name');
    let jobInput = document.getElementById('description');

    // Выберите элементы, куда должны быть вставлены значения полей
    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);