class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._popupCloseButton = this._element.querySelector('.popup__close-icon');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._element.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _setEventListeners() {
        this._popupCloseButton.addEventListener('click', () => this.close());
    }
}

export default Popup;