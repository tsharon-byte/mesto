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
const placeName = document.getElementById('place-name');
const placeUrl = document.getElementById('place-url');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const viewPlacePopup = document.getElementById('viewImagePopup');
const viewPlaceImage = viewPlacePopup.querySelector('.popup__image');
const viewPlaceCaption = viewPlacePopup.querySelector('.figure__caption');
const viewPlaceClosePopUpBtn = viewPlacePopup.querySelector('.popup__close-icon');

const openPopup = (item) => {
    item.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEsc);
    const form = item.querySelector(validationConfig.formSelector);
    if (form) {
        ititiateForm(form, validationConfig);
    }
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
        viewPlaceImage.src = link;
        viewPlaceImage.alt = name;
        viewPlaceCaption.textContent = name;
        openPopup(viewPlacePopup);
    })
    return item;
};

const addElement = item => elements.append(prepareElement(item));

const editProfilePopupOpened = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(editProfilePopup);
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(editProfilePopup);
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
    closePopup(addPlacePopup);
    evt.target.reset();
    setSubmitButtonState(addPlaceForm, validationConfig);
}

function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const popupList = Array.from(document.querySelectorAll('.popup'));
        popupList.forEach(item => {
            item.classList.remove("popup_opened");
        });
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
closePopUpBtn.addEventListener('click', () => closePopup(editProfilePopup));
addBtn.addEventListener('click', () => openPopup(addPlacePopup));
addPlaceClosePopUpBtn.addEventListener('click', () => closePopup(addPlacePopup));
viewPlaceClosePopUpBtn.addEventListener('click', () => closePopup(viewPlacePopup))
editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);
addPlaceForm.addEventListener('submit', addPlaceFormSubmitHandler);

initialCards.forEach(addElement);
addEventListenersToPopup();