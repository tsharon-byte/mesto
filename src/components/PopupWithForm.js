import Popup from './Popup';
import {OPEN_EVENT, SUBMIT_BTN_SELECTOR} from "../utils/constants";

class PopupWithForm extends Popup {
    constructor(selector, onSubmit) {
        super(selector);
        this._onSubmit = onSubmit;
        this._form = document.getElementById(`${this._element.id}Form`);
        this._submitButton = this._form.querySelector(SUBMIT_BTN_SELECTOR);
        this._submitButtonText = this._submitButton.textContent;
        this._inputList = this._element.querySelectorAll('.input');
    }

    createElement() {
        this._openEvent = new Event(OPEN_EVENT);
        this._setEventListeners();
        return this;
    }

    getForm() {
        return this._form;
    }

    open(callback) {
        super.open();
        this._callback = callback;
        this._form.dispatchEvent(this._openEvent);
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setFormValues(data) {
        this._inputList.forEach(input => {
            input.value = data[input.name];
        });
    }

    renderLoading(isLoading, loadingText = 'Сохранение...') {
        if (isLoading) {
            this._submitButton.setAttribute('disabled', 'disabled');
            this._submitButton.textContent = loadingText;
        } else {
            this._submitButton.removeAttribute('disabled');
            this._submitButton.textContent = this._submitButtonText;
        }
    }

    _setEventListeners() {
        super._setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            if (this._callback) {
                this._callback();
            }
            this._onSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm;