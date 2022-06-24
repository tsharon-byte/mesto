import Popup from './Popup';
class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._element.querySelector('.popup__image');
        this._caption = this._element.querySelector('.figure__caption');
        this._setEventListeners();
    }

    open(data) {
        this._image.src = data.link;
        this._image.alt = data.name;
        this._caption.textContent = data.name;
        super.open();
    }
}

export default PopupWithImage;