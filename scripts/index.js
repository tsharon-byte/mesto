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

const viewPlacePopup = document.getElementById('ViewImagePopup');
const viewPlaceImage = viewPlacePopup.querySelector('.popup__image');
const viewPlaceCaption = viewPlacePopup.querySelector('.figure__caption');
const viewPlaceClosePopUp = viewPlacePopup.querySelector('.popup__close-icon');

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

const viewPlacePopupOpened = () => {
    viewPlacePopup.classList.add("popup_opened");
}

const prepareElement = ({name, link}) => {
    const elementTemplate = document.querySelector('#elementTemplate').content;
    const item = elementTemplate.querySelector('.elements__item').cloneNode(true);

    const image = item.querySelector('.elements__image');
    const deleteButton = item.querySelector('.elements__delete');
    const elementName = item.querySelector('.elements__name');
    const likeButton = item.querySelector('.elements__like');

    image.src = link;
    image.alt = name;
    elementName.textContent = name;
    likeButton.addEventListener('click', event => {
        event.target.classList.toggle('active');
    });
    deleteButton.addEventListener('click', () => {
        item.remove();
    });
    image.addEventListener('click', () => {
        viewPlaceImage.src = link;
        viewPlaceImage.alt = name;
        viewPlaceCaption.textContent = name;
        viewPlacePopupOpened();
    })
    return item;
};

const addElement = item => elements.append(prepareElement(item));
initialCards.forEach(addElement);

const editProfilePopupOpened = () => {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

const addPlacePopupOpened = () => {
    addPlacePopup.classList.add("popup_opened");
}

const popupClosed = id => {
    const popup = document.getElementById(id);
    popup.classList.remove("popup_opened");
}

editBtn.addEventListener('click', editProfilePopupOpened);
closePopUp.addEventListener('click', () => popupClosed('EditProfilePopup'));

addBtn.addEventListener('click', addPlacePopupOpened);
addPlaceClosePopUp.addEventListener('click', () => popupClosed('AddPlacePopup'));

viewPlaceClosePopUp.addEventListener('click', () => popupClosed('ViewImagePopup'))

function formSubmitHandler(evt) {
    evt.preventDefault();
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
        elements.prepend(prepareElement(item));
    }
    popupClosed('AddPlacePopup');
}

formElement.addEventListener('submit', formSubmitHandler);
addPlaceForm.addEventListener('submit', addPlaceFormSubmitHandler);