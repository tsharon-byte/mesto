import Card from '../components/Card';
import './index.css';
import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import {
    AVATAR_EDIT_POPUP_SELECTOR, avatarBtn, CARD_DELETE_POPUP_SELECTOR,
    CARD_ELEMENT_TEMPLATE_SELECTOR,
    cardAddBtn,
    CARDS_CONTAINER_SELECTOR,
    MOUSE_DOWN_EVENT,
    PLACE_ADD_POPUP_SELECTOR,
    PROFILE_POPUP_SELECTOR,
    profileEditBtn,
    showError, USER_NAME_SELECTOR, USER_DESCRIPTION_SELECTOR, PROFILE_AVATAR_SELECTOR, PLACE_VIEWER_POPUP_SELECTOR
} from '../utils/constants';
import FormValidator from '../components/FormValidator';
import validationConfig from '../utils/config';
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
import Api from "../components/Api";

(function () {
    function createCard(item) {
        return new Card(item,
            CARD_ELEMENT_TEMPLATE_SELECTOR,
            data => popupWithImage.open(data),
            () => api.deleteCard(item._id),
            () => api.putCardLikes(item._id),
            () => api.deleteCardLikes(item._id),
            cardDeletePopupWithForm).createElement();
    }

    function handleProfileFormSubmit(data) {
        profilePopupWithForm.renderLoading(true);
        api.patchUserInfo(data).then(data => {
            userInfo.setUserInfo(data);
            profilePopupWithForm.close();
        }).catch(showError).finally(() => profilePopupWithForm.renderLoading(false));
    }

    function handleAddPlaceFormSubmit({placeName: name, placeUrl: link}) {
        placeAddPopupWithForm.renderLoading(true, 'Создание...');
        api.postCard({name, link}).then(({name, link, _id, likes}) => {
            cardsContainer.addItem(createCard({name, link, _id, isMine: true, likes}));
            placeAddPopupWithForm.close();
        }).catch(showError).finally(() => placeAddPopupWithForm.renderLoading(false));
    }

    function handleEditAvatarFormSubmit({avatar}) {
        avatarEditPopupWithForm.renderLoading(true);
        api.patchAvatar({avatar}).then((data) => {
            userInfo.setUserInfo(data);
            avatarEditPopupWithForm.close();
        }).catch(showError).finally(() => avatarEditPopupWithForm.renderLoading(false));
    }

    function handleDeleteCardFormSubmit() {
        cardDeletePopupWithForm.close();
    }

    const userInfo = new UserInfo({
        nameSelector: USER_NAME_SELECTOR,
        descriptionSelector: USER_DESCRIPTION_SELECTOR,
        avatarSelector: PROFILE_AVATAR_SELECTOR
    });

    const popupWithImage = new PopupWithImage(PLACE_VIEWER_POPUP_SELECTOR);

    const api = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
        headers: {
            authorization: 'c330429b-3b89-464c-a07c-3bb6ae16281d',
            'Content-Type': 'application/json'
        }
    });

    const cardsContainer = new Section({
        renderer: createCard
    }, CARDS_CONTAINER_SELECTOR);

    const profilePopupWithForm = new PopupWithForm(
        PROFILE_POPUP_SELECTOR,
        handleProfileFormSubmit).createElement();
    const profilePopupWithFormValidator = new FormValidator(validationConfig, profilePopupWithForm.getForm());
    profilePopupWithFormValidator.enableValidation();

    const placeAddPopupWithForm = new PopupWithForm(
        PLACE_ADD_POPUP_SELECTOR,
        handleAddPlaceFormSubmit).createElement();
    const placeAddPopupWithFormValidator = new FormValidator(validationConfig, placeAddPopupWithForm.getForm());
    placeAddPopupWithFormValidator.enableValidation();

    const avatarEditPopupWithForm = new PopupWithForm(
        AVATAR_EDIT_POPUP_SELECTOR,
        handleEditAvatarFormSubmit).createElement();
    const avatarEditPopupWithFormValidator = new FormValidator(validationConfig, avatarEditPopupWithForm.getForm());
    avatarEditPopupWithFormValidator.enableValidation();

    const cardDeletePopupWithForm = new PopupWithForm(
        CARD_DELETE_POPUP_SELECTOR,
        handleDeleteCardFormSubmit).createElement();

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
        }).catch(showError);
    }).catch(showError);

    profileEditBtn.addEventListener(MOUSE_DOWN_EVENT, () => {
        profilePopupWithForm.setFormValues(userInfo.getUserInfo())
        profilePopupWithForm.open();
    });
    cardAddBtn.addEventListener(MOUSE_DOWN_EVENT, () => {
        placeAddPopupWithForm.open();
    });
    avatarBtn.addEventListener(MOUSE_DOWN_EVENT, () => {
        avatarEditPopupWithForm.open();
    });
})();





