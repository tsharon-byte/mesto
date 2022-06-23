import {initialCards} from "./initial-cards.js"
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'input_type_error',
};

const CARD_TEMPLATE_SELECTOR = '#elementTemplate';

const profileEditBtn = document.querySelector('.profile__edit-button');
const cardAddBtn = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.elements');

const profilePopup = document.getElementById('profilePopup');
const profileCloseBtn = profilePopup.querySelector('.popup__close-icon');
const profileForm = document.getElementById('profileForm');
const profileFormValidator = new FormValidator(validationConfig, profileForm);
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');

const placeAddPopup = document.getElementById('placeAddPopup');
const placeAddCloseBtn = placeAddPopup.querySelector('.popup__close-icon');
const placeAddForm = document.getElementById('placeAddForm');
const placeAddFormValidator = new FormValidator(validationConfig, placeAddForm);
const placeName = document.getElementById('place-name');
const placeUrl = document.getElementById('place-url');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

export const openPopup = (item) => {
    item.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEsc);
}

const closePopup = popup => {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closePopupByEsc);
}
const createCard = item => (new Card(item, CARD_TEMPLATE_SELECTOR, handleCardClick)).createElement();

const addElement = item => cardsContainer.append(createCard(item));

const editProfilePopupOpened = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    profileFormValidator.initiateForm();
    openPopup(profilePopup);
}

const profilePopupClosed = () => {
    closePopup(profilePopup);
}

const placeAddPopupOpened = () => {
    openPopup(placeAddPopup);
}

const placeAddPopupClosed = () => {
    placeAddFormValidator.initiateForm();
    closePopup(placeAddPopup);
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(profilePopup);
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
        cardsContainer.prepend(createCard(item));
    }
    closePopup(placeAddPopup);
    evt.target.reset();
    placeAddFormValidator.setSubmitButtonState();
}

function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const item = document.querySelector('.popup_opened');
        closePopup(item);
    }
}

function addEventListenersToPopup() {
    const popupList = document.querySelectorAll('.popup');
    popupList.forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.classList.contains('popup')) {
                closePopup(event.target);
            }
        })
    })
}

//--------------PopupWithImage-------------
const placeViewerPopup = document.getElementById('placeViewerPopup');
const placeViewerCloseBtn = placeViewerPopup.querySelector('.popup__close-icon');

export const handleCardClick = (data) => {
    const placeViewerImage = placeViewerPopup.querySelector('.popup__image');
    const placeViewerCaption = placeViewerPopup.querySelector('.figure__caption');
    placeViewerImage.src = data.link;
    placeViewerImage.alt = data.name;
    placeViewerCaption.textContent = data.name;
    openPopup(placeViewerPopup);
}
placeViewerCloseBtn.addEventListener('click', () => closePopup(placeViewerPopup))
//-------------------------------------------

profileEditBtn.addEventListener('click', editProfilePopupOpened);
profileCloseBtn.addEventListener('click', profilePopupClosed);
cardAddBtn.addEventListener('click', placeAddPopupOpened);
placeAddCloseBtn.addEventListener('click', placeAddPopupClosed);
profileForm.addEventListener('submit', editProfileFormSubmitHandler);
placeAddForm.addEventListener('submit', addPlaceFormSubmitHandler);

initialCards.forEach(addElement);
addEventListenersToPopup();

profileFormValidator.enableValidation();
placeAddFormValidator.enableValidation();