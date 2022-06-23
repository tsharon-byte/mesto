class FormValidator {
    constructor(config, formElement) {
        this._form = formElement;
        this._config = config;
    }

    _checkFieldIsValid(item) {
        return item.validity.valid
    }

    _checkFormIsValid() {
        const inputArray = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        return inputArray.every(this._checkFieldIsValid);
    }

    _getErrorElement(input) {
        return document.getElementById(`${input.id}-error`);
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
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);
        if (this._checkFormIsValid()) {
            submitButton.classList.remove(this._config.inactiveButtonClass);
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.classList.add(this._config.inactiveButtonClass);
            submitButton.setAttribute("disabled", "disabled");
        }
    }

    initiateForm() {
        const inputArray = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        inputArray.forEach(item => this._generateErrorMessage(item));
        this.setSubmitButtonState(this._form, this._config);
    }

    _setEventListeners() {
        this._form.addEventListener('input', (event) => {
            this._generateErrorMessage(event.target, this._config);
            this.setSubmitButtonState(this._form, this._config);
        })
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export default FormValidator;