import Popup from './Popup';
import FormValidator from '../utils/FormValidator';
import validationConfig from '../utils/config';

class PopupWithForm extends Popup {
    constructor(selector, onSubmit) {
        super(selector);
        this._onSubmit = onSubmit;
    }

    createElement() {
        this._form = document.getElementById(`${this._element.id}Form`);
        this._validator = new FormValidator(validationConfig, this._form);
        this._validator.enableValidation();
        this._setEventListeners();
        return this;
    }

    open() {
        super.open();
        this._validator.initiateForm();
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
            this._onSubmit(this._getInputValues());
            this._form.reset();
        });
    }
}

export default PopupWithForm;