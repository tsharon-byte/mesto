import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
import Api from "../components/Api";

export const CARD_ELEMENT_TEMPLATE_SELECTOR = '#elementTemplate';
export const PLACE_VIEWER_POPUP_SELECTOR = '#placeViewerPopup';
export const USER_NAME_SELECTOR = '.profile__name';
export const USER_DESCRIPTION_SELECTOR = '.profile__description';
export const PROFILE_AVATAR_SELECTOR = '.avatar__picture';
export const PROFILE_POPUP_SELECTOR = '#profilePopup';
export const PLACE_ADD_POPUP_SELECTOR = '#placeAddPopup';
export const AVATAR_EDIT_POPUP_SELECTOR = '#avatarEditPopup';
export const CARD_DELETE_POPUP_SELECTOR = '#cardDeletePopup';
export const CARDS_CONTAINER_SELECTOR = '.elements';
export const CLICK_EVENT = 'click';
export const OPEN_EVENT = 'open';
const PROFILE_EDIT_BTN_SELECTOR = '.profile__edit-button';
const PROFILE_ADD_BTN_SELECTOR = '.profile__add-button';
const SUBMIT_BTN_SELECTOR = '.form__submit';
const AVATAR_SELECTOR = '.avatar';
const SNACKBAR_SELECTOR = '.snackbar';
const SNACKBAR_VISIBLE_CLASS = 'show';
export const profileEditBtn = document.querySelector(PROFILE_EDIT_BTN_SELECTOR);
export const cardAddBtn = document.querySelector(PROFILE_ADD_BTN_SELECTOR);
export const avatarBtn = document.querySelector(AVATAR_SELECTOR);
export const snackbar = document.querySelector(SNACKBAR_SELECTOR);
export const addPlaceFormSubmitBtn = document.querySelector(PLACE_ADD_POPUP_SELECTOR).querySelector(SUBMIT_BTN_SELECTOR);
export const avatarEditFormSubmitBtn = document.querySelector(AVATAR_EDIT_POPUP_SELECTOR).querySelector(SUBMIT_BTN_SELECTOR)
export const editProfileFormSubmitBtn = document.querySelector(PROFILE_POPUP_SELECTOR).querySelector(SUBMIT_BTN_SELECTOR)
export const userInfo = new UserInfo({
    nameSelector: USER_NAME_SELECTOR,
    descriptionSelector: USER_DESCRIPTION_SELECTOR,
    avatarSelector: PROFILE_AVATAR_SELECTOR
});

export const popupWithImage = new PopupWithImage(PLACE_VIEWER_POPUP_SELECTOR);

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
    headers: {
        authorization: 'c330429b-3b89-464c-a07c-3bb6ae16281d',
        'Content-Type': 'application/json'
    }
});

export function showError(err) {
    snackbar.classList.add(SNACKBAR_VISIBLE_CLASS);
    snackbar.textContent = err;
    setTimeout(() => {
        snackbar.textContent = '';
        snackbar.classList.remove(SNACKBAR_VISIBLE_CLASS);
    }, 3000);
    console.error(err);
}
