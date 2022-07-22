import Popup from './Popup';
import {OPEN_EVENT} from "../utils/constants";

class PopupWithForm extends Popup {
    constructor(selector, onSubmit) {
        super(selector);
        this._onSubmit = onSubmit;
    }

    createElement() {
        this._form = document.getElementById(`${this._element.id}Form`);
        this._openEvent = new Event(OPEN_EVENT);
        this._setEventListeners();
        return this;
    }

    getForm() {
        this._form = document.getElementById(`${this._element.id}Form`);
        return this._form;
    }

    open(callback) {
        super.open();
        this._callback = callback;
        this._form.dispatchEvent(this._openEvent);
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setFormValues(data) {
        this._inputList = this._element.querySelectorAll('.input');
        this._inputList.forEach(input => {
            input.value = data[input.name];
        });
    }

    _setEventListeners() {
        super._setEventListeners();
        this._form = document.getElementById(`${this._element.id}Form`);
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            if (this._callback) {
                this._callback();
            }
            this._onSubmit(this._getInputValues());
            this._form.reset();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}

export default PopupWithForm;