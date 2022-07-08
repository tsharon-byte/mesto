import Card from '../components/Card.js';
import './index.css';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../utils/initial-cards.js'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
    CARD_ELEMENT_TEMPLATE_SELECTOR,
    cardAddBtn,
    CARDS_CONTAINER_SELECTOR,
    CLICK_ACTION,
    PLACE_ADD_POPUP_SELECTOR,
    PLACE_VIEWER_POPUP_SELECTOR,
    PROFILE_POPUP_SELECTOR,
    profileEditBtn,
    USER_DESCRIPTION_SELECTOR,
    USER_NAME_SELECTOR
} from "../utils/constants";
import FormValidator from "../utils/FormValidator";
import validationConfig from "../utils/config";

const createCard = item => new Card(item,
    CARD_ELEMENT_TEMPLATE_SELECTOR,
    data => popupWithImage.open(data)).createElement();

function editProfileFormSubmitHandler({name, description}) {
    userInfo.setUserInfo({name, description});
    profilePopupWithForm.close();
}

function addPlaceFormSubmitHandler({placeName: name, placeUrl: link}) {
    cardsContainer.addItem(createCard({name, link}));
    placeAddPopupWithForm.close();
}

// Create popup with image
const popupWithImage = new PopupWithImage(PLACE_VIEWER_POPUP_SELECTOR);
// Create new section for cards
const cardsContainer = new Section({
    items: initialCards,
    renderer: createCard
}, CARDS_CONTAINER_SELECTOR);

// Create class instance for user information
const userInfo = new UserInfo({
    nameSelector: USER_NAME_SELECTOR,
    descriptionSelector: USER_DESCRIPTION_SELECTOR
});

// Create popup to edit user profile
const profilePopupWithForm = new PopupWithForm(
    PROFILE_POPUP_SELECTOR,
    editProfileFormSubmitHandler).createElement();
const profilePopupWithFormValidator = new FormValidator(validationConfig, profilePopupWithForm.getForm());
profilePopupWithFormValidator.enableValidation();

// Create popup to add new card
const placeAddPopupWithForm = new PopupWithForm(
    PLACE_ADD_POPUP_SELECTOR,
    addPlaceFormSubmitHandler).createElement();
const placeAddPopupWithFormValidator = new FormValidator(validationConfig, placeAddPopupWithForm.getForm());
placeAddPopupWithFormValidator.enableValidation();

// Add event listeners
profileEditBtn.addEventListener(CLICK_ACTION, () => {
    profilePopupWithForm.setFormValues(userInfo.getUserInfo())
    profilePopupWithForm.open();
});
cardAddBtn.addEventListener(CLICK_ACTION, () => {
    placeAddPopupWithForm.open();
});

// Render section with cards
cardsContainer.render();
