const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');

const popup = document.getElementById('EditProfilePopup');
const closePopUp = popup.querySelector('.popup__close-icon');
const formElement = document.getElementById('EditProfileForm');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');

const addPlacePopup = document.getElementById('AddPlacePopup');
const addPlaceClosePopUp = addPlacePopup.querySelector('.popup__close-icon');
const addPlaceForm = document.getElementById('AddPlaceForm');
const placeName = document.getElementById('place_name');
const placeUrl = document.getElementById('place_url');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

let initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const prepareElement = ({name, link}) => {
    const id = Date.now();
    return `
                    <div class="elements__item" id={id}>
                        <img class="elements__image"
                             src=${link}
                             alt=${name}>
                        <div class="elements__title">
                            <h2 class="elements__name">${name}</h2>
                            <button class="image-button elements__like" type="button"/>
                        </div>
                        <button class="image-button elements__delete" type="button"/>
                    </div>`
};
const addElement = (item) => elements.insertAdjacentHTML('beforeend', prepareElement(item));
initialCards.forEach(addElement);


const editProfilePopupOpened = () => {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

const addPlacePopupOpened = () => {
    addPlacePopup.classList.add("popup_opened");
}

const popupClosed = (id) => {
    const popup = document.getElementById(id);
    popup.classList.remove("popup_opened");
}
editBtn.addEventListener('click', editProfilePopupOpened);
closePopUp.addEventListener('click', () => popupClosed('EditProfilePopup'));

addBtn.addEventListener('click', addPlacePopupOpened);
addPlaceClosePopUp.addEventListener('click', () => popupClosed('AddPlacePopup'));

function formSubmitHandler(evt) {
    evt.preventDefault();
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClosed('EditProfilePopup');
}

function addPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    const name = placeName.value;
    const link = placeUrl.value;
    if (name && link) {
        const item = {
            name,
            link
        };
        elements.insertAdjacentHTML('afterbegin', prepareElement(item));
    }
    popupClosed('AddPlacePopup');
}

formElement.addEventListener('submit', formSubmitHandler);
addPlaceForm.addEventListener('submit', addPlaceFormSubmitHandler);