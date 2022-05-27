const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');

const editProfilePopup = document.getElementById('editProfilePopup');
const closePopUpBtn = editProfilePopup.querySelector('.popup__close-icon');
const editProfileForm = document.getElementById('editProfileForm');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');

const addPlacePopup = document.getElementById('addPlacePopup');
const addPlaceClosePopUpBtn = addPlacePopup.querySelector('.popup__close-icon');
const addPlaceForm = document.getElementById('addPlaceForm');
const placeName = document.getElementById('place_name');
const placeUrl = document.getElementById('place_url');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const viewPlacePopup = document.getElementById('viewImagePopup');
const viewPlaceImage = viewPlacePopup.querySelector('.popup__image');
const viewPlaceCaption = viewPlacePopup.querySelector('.figure__caption');
const viewPlaceClosePopUpBtn = viewPlacePopup.querySelector('.popup__close-icon');

const openPopup = (item) => {
    item.classList.add("popup_opened");
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
        openPopup(viewPlacePopup);
    })
    return item;
};

const addElement = item => elements.append(prepareElement(item));
initialCards.forEach(addElement);

const editProfilePopupOpened = () => {
    openPopup(editProfilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

const addPlacePopupOpened = () => {
    openPopup(addPlacePopup);
}

const popupClosed = popup => {
    popup.classList.remove("popup_opened");
}

editBtn.addEventListener('click', editProfilePopupOpened);
closePopUpBtn.addEventListener('click', () => popupClosed(editProfilePopup));

addBtn.addEventListener('click', addPlacePopupOpened);
addPlaceClosePopUpBtn.addEventListener('click', () => popupClosed(addPlacePopup));

viewPlaceClosePopUpBtn.addEventListener('click', () => popupClosed(viewPlacePopup))

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClosed(editProfilePopup);
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
    popupClosed(addPlacePopup);
}

editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);
addPlaceForm.addEventListener('submit', addPlaceFormSubmitHandler);