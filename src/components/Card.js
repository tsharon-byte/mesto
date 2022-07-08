import {CLICK_ACTION} from "../utils/constants";

class Card {
    constructor({name, link}, selector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._remove = this._remove.bind(this);
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.elements__item')
            .cloneNode(true);
    }

    createElement() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const image = this._element.querySelector('.elements__image');
        const elementName = this._element.querySelector('.elements__name');

        image.src = this._link;
        image.alt = this._name;
        elementName.textContent = this._name;

        return this._element;
    }

    _like(event) {
        event.target.classList.toggle('active');
    }

    _remove() {
        this._element.remove();
    }

    _setEventListeners() {
        this._element.addEventListener(CLICK_ACTION, event => {
            if (event.target.classList.contains('elements__like')) {
                this._like(event);
            } else if (event.target.classList.contains('elements__delete')) {
                this._remove();
            } else {
                this._handleCardClick({link: this._link, name: this._name});
            }
        })
    }
}

export default Card;