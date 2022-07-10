class FormValidator {
    constructor(config, formElement) {
        this._form = formElement;
        this._config = config;
        this._inputArray = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }

    _checkFieldIsValid(item) {
        return item.validity.valid
    }

    _checkFormIsValid() {
        return this._inputArray.every(this._checkFieldIsValid);
    }

    _getErrorElement(input) {
        return document.getElementById(`${input.id}-error`);
    }
    _resetErrorMessage(input) {
        const error = this._getErrorElement(input);
        error.textContent = '';
        input.classList.remove(this._config.inputErrorClass);
    }

    _generateErrorMessage(input) {
        const error = this._getErrorElement(input);
        error.textContent = input.validationMessage;
        if (this._checkFieldIsValid(input)) {
            input.classList.remove(this._config.inputErrorClass);
        } else {
            input.classList.add(this._config.inputErrorClass);
        }
    }

    setSubmitButtonState() {
        if (this._checkFormIsValid()) {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        } else {
            this._submitButton.classList.add(this._config.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', 'disabled');
        }
    }

    initiateForm() {
        this._inputArray.forEach(item => this._resetErrorMessage(item));
        this.setSubmitButtonState();
    }

    _setEventListeners() {
        this._form.addEventListener('input', (event) => {
            this._generateErrorMessage(event.target, this._config);
            this.setSubmitButtonState();
        })
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export default FormValidator;