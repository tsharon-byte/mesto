const validationConfig = {
    formSelector: '.form',
    inputSelector: '.input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'input_type_error',
};

function fieldIsValid(item) {
    return item.validity.valid
}

function formIsValid(form, config) {
    const inputArray = Array.from(form.querySelectorAll(config.inputSelector));
    return inputArray.every(fieldIsValid);
}

function getErrorElement(input) {
    return document.getElementById(`${input.id}-error`);
}

function generateErrorMessage(input, config) {
    const error = getErrorElement(input);
    error.textContent = input.validationMessage;
    if (fieldIsValid(input)) {
        input.classList.remove(config.inputErrorClass);
    } else {
        input.classList.add(config.inputErrorClass);
    }
}

function setSubmitButtonState(form, config) {
    const submitButton = form.querySelector(config.submitButtonSelector);
    if (formIsValid(form, config)) {
        submitButton.classList.remove(config.inactiveButtonClass);
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.setAttribute("disabled", "disabled");
    }
}

function ititiateForm(form, config) {
    const inputArray = Array.from(form.querySelectorAll(config.inputSelector));
    inputArray.forEach(item => generateErrorMessage(item, config));
    setSubmitButtonState(form, config);
}

function enableValidation(config) {
    const formArray = Array.from(document.querySelectorAll(config.formSelector));
    formArray.forEach(form => {
        form.addEventListener('input', (event) => {
            generateErrorMessage(event.target, config);
            setSubmitButtonState(form, config);
        })
    })
}

enableValidation(validationConfig);