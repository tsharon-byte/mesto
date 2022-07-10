import {CLICK_ACTION} from '../utils/constants';

class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _setEventListeners() {
        this._element.addEventListener(CLICK_ACTION, (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
                this.close();
            }
        });
    }
}

export default Popup;