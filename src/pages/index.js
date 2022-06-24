import Card from '../components/Card.js';
import './index.css';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../utils/initial-cards.js'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
    cardAddBtn,
    profileEditBtn
} from "../utils/constants";

const createCard = item => (new Card(item, '#elementTemplate', data => popupWithImage.open(data))).createElement();

function editProfileFormSubmitHandler({name, description}) {
    userInfo.setUserInfo({name, description});
    profilePopupWithForm.close();
}

function addPlaceFormSubmitHandler({place_name: name, place_url: link}) {
    if (name && link) {
        cardsContainer.addItem(createCard({name, link}));
    }
    placeAddPopupWithForm.close();
}

// Create popup with image
const popupWithImage = new PopupWithImage('#placeViewerPopup');
// Create new section for cards
const cardsContainer = new Section({
    items: initialCards,
    renderer: createCard
}, '.elements');

// Create class instance for user information
const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description'
});

// Create popup to edit user profile
const profilePopupWithForm = (new PopupWithForm('#profilePopup', editProfileFormSubmitHandler)).createElement();

// Create popup to add new card
const placeAddPopupWithForm = (new PopupWithForm('#placeAddPopup', addPlaceFormSubmitHandler)).createElement();

// Add event listeners
profileEditBtn.addEventListener('click', () => {
    profilePopupWithForm.setFormValues(userInfo.getUserInfo())
    profilePopupWithForm.open();
});
cardAddBtn.addEventListener('click', () => {
    placeAddPopupWithForm.open();
});

// Render section with cards
cardsContainer.render();
