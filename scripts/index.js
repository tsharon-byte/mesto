const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');

const profilePopup = document.getElementById('profilePopup');
const profileCloseBtn = profilePopup.querySelector('.popup__close-icon');
const profileForm = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');

const placeAddPopup = document.getElementById('placeAddPopup');
const addPlaceClosePopUpBtn = placeAddPopup.querySelector('.popup__close-icon');
const placeAddForm = document.getElementById('placeAddForm');
const placeName = document.getElementById('place-name');
const placeUrl = document.getElementById('place-url');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const placeViewerPopup = document.getElementById('placeViewerPopup');
const placeViewerImage = placeViewerPopup.querySelector('.popup__image');
const placeViewerCaption = placeViewerPopup.querySelector('.figure__caption');
const placeViewerCloseBtn = placeViewerPopup.querySelector('.popup__close-icon');

const openPopup = (item) => {
    item.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEsc);
}

const closePopup = popup => {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closePopupByEsc);
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
        placeViewerImage.src = link;
        placeViewerImage.alt = name;
        placeViewerCaption.textContent = name;
        openPopup(placeViewerPopup);
    })
    return item;
};

const addElement = item => elements.append(prepareElement(item));

const editProfilePopupOpened = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    initiateForm(profileForm, validationConfig);
    openPopup(profilePopup);
}

const placeAddPopupOpened = () => {
    initiateForm(placeAddForm, validationConfig);
    openPopup(placeAddPopup);
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(profilePopup);
    evt.target.reset();
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
    closePopup(placeAddPopup);
    evt.target.reset();
    setSubmitButtonState(placeAddForm, validationConfig);
}

function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const item = document.querySelector('.popup_opened');
        closePopup(item);
    }
}

function addEventListenersToPopup() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach(item => {
        item.addEventListener('click', event => {
            if (event.target.classList.contains('popup')) {
                closePopup(event.target);
            }
        })
    })
}

editBtn.addEventListener('click', editProfilePopupOpened);
profileCloseBtn.addEventListener('click', () => closePopup(profilePopup));
addBtn.addEventListener('click', placeAddPopupOpened);
addPlaceClosePopUpBtn.addEventListener('click', () => closePopup(placeAddPopup));
placeViewerCloseBtn.addEventListener('click', () => closePopup(placeViewerPopup))
profileForm.addEventListener('submit', editProfileFormSubmitHandler);
placeAddForm.addEventListener('submit', addPlaceFormSubmitHandler);

initialCards.forEach(addElement);
addEventListenersToPopup();