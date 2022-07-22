import Card from '../components/Card';
import './index.css';
import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import {
    addPlaceFormSubmitBtn,
    api,
    AVATAR_EDIT_POPUP_SELECTOR, avatarBtn, avatarEditFormSubmitBtn, CARD_DELETE_POPUP_SELECTOR,
    CARD_ELEMENT_TEMPLATE_SELECTOR,
    cardAddBtn,
    CARDS_CONTAINER_SELECTOR,
    CLICK_EVENT, editProfileFormSubmitBtn,
    PLACE_ADD_POPUP_SELECTOR,
    popupWithImage,
    PROFILE_POPUP_SELECTOR,
    profileEditBtn,
    userInfo,
    showError
} from '../utils/constants';
import FormValidator from '../components/FormValidator';
import validationConfig from '../utils/config';

function main() {

    function createCard(item) {
        return new Card(item,
            CARD_ELEMENT_TEMPLATE_SELECTOR,
            data => popupWithImage.open(data),
            () => api.deleteCard(item._id),
            () => api.putCardLikes(item._id),
            () => api.deleteCardLikes(item._id),
            cardDeletePopupWithForm).createElement();
    }

    function editProfileFormSubmitHandler(data) {
        editProfileFormSubmitBtn.textContent = 'Сохранение...';
        api.patchUserInfo(data).then(data => {
            userInfo.setUserInfo(data);
            editProfileFormSubmitBtn.textContent = 'Сохранить';
            profilePopupWithForm.close();
        }).catch(() => showError('Ошибка редактирования данных пользователя'));
    }

    function addPlaceFormSubmitHandler({placeName: name, placeUrl: link}) {
        addPlaceFormSubmitBtn.textContent = 'Создание...';
        api.postCard({name, link}).then(({name, link, _id, likes}) => {
            cardsContainer.addItem(createCard({name, link, _id, isMine: true, likes}));
            addPlaceFormSubmitBtn.textContent = 'Создать';
            placeAddPopupWithForm.close();
        }).catch(() => showError('Ошибка добавления места'));
    }

    function avatarEditFormSubmitHandler({avatar}) {
        avatarEditFormSubmitBtn.textContent = 'Сохранение...';
        api.patchAvatar({avatar}).then((data) => {
            userInfo.setAvatar(data);
            avatarEditFormSubmitBtn.textContent = 'Сохранить';
            avatarEditPopupWithForm.close();
        }).catch(() => showError('Ошибка обновления аватара пользователя'));
    }

    function cardDeleteFormSubmitHandler() {
        cardDeletePopupWithForm.close();
    }

    const cardsContainer = new Section({
        renderer: createCard
    }, CARDS_CONTAINER_SELECTOR);

    const profilePopupWithForm = new PopupWithForm(
        PROFILE_POPUP_SELECTOR,
        editProfileFormSubmitHandler).createElement();
    const profilePopupWithFormValidator = new FormValidator(validationConfig, profilePopupWithForm.getForm());
    profilePopupWithFormValidator.enableValidation();

    const placeAddPopupWithForm = new PopupWithForm(
        PLACE_ADD_POPUP_SELECTOR,
        addPlaceFormSubmitHandler).createElement();
    const placeAddPopupWithFormValidator = new FormValidator(validationConfig, placeAddPopupWithForm.getForm());
    placeAddPopupWithFormValidator.enableValidation();

    const avatarEditPopupWithForm = new PopupWithForm(
        AVATAR_EDIT_POPUP_SELECTOR,
        avatarEditFormSubmitHandler).createElement();
    const avatarEditPopupWithFormValidator = new FormValidator(validationConfig, avatarEditPopupWithForm.getForm());
    avatarEditPopupWithFormValidator.enableValidation();

    const cardDeletePopupWithForm = new PopupWithForm(
        CARD_DELETE_POPUP_SELECTOR,
        cardDeleteFormSubmitHandler).createElement();

    api.getUserInfo().then(user => {
        userInfo.setUserInfo(user);
        api.getInitialCards().then(data => {
            cardsContainer.render(data.map(({name, link, _id, owner, likes}) => ({
                name,
                link,
                _id,
                ownerId: owner._id,
                userId: user._id,
                likes
            })));
        }).catch(() => showError('Ошибка получения карточек'));
    }).catch(() => showError('Ошибка получения данных пользователя'));

    profileEditBtn.addEventListener(CLICK_EVENT, () => {
        profilePopupWithForm.setFormValues(userInfo.getUserInfo())
        profilePopupWithForm.open();
    });
    cardAddBtn.addEventListener(CLICK_EVENT, () => {
        placeAddPopupWithForm.open();
    });
    avatarBtn.addEventListener(CLICK_EVENT, () => {
        avatarEditPopupWithForm.open();
    });
}

main();





