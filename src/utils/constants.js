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
export const MOUSE_DOWN_EVENT = 'mousedown';
export const OPEN_EVENT = 'open';
const PROFILE_EDIT_BTN_SELECTOR = '.profile__edit-button';
const PROFILE_ADD_BTN_SELECTOR = '.profile__add-button';
export const SUBMIT_BTN_SELECTOR = '.form__submit';
const AVATAR_SELECTOR = '.avatar';
const SNACKBAR_SELECTOR = '.snackbar';
const SNACKBAR_VISIBLE_CLASS = 'show';
export const profileEditBtn = document.querySelector(PROFILE_EDIT_BTN_SELECTOR);
export const cardAddBtn = document.querySelector(PROFILE_ADD_BTN_SELECTOR);
export const avatarBtn = document.querySelector(AVATAR_SELECTOR);
export const snackbar = document.querySelector(SNACKBAR_SELECTOR);

export function showError(err) {
    const errorMessage = 'Ошибка';
    snackbar.classList.add(SNACKBAR_VISIBLE_CLASS);
    snackbar.textContent = errorMessage;
    setTimeout(() => {
        snackbar.textContent = '';
        snackbar.classList.remove(SNACKBAR_VISIBLE_CLASS);
    }, 3000);
    console.error(err);
}
