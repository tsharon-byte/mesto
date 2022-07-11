import {CLICK_EVENT} from '../utils/constants';

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
        event.stopPropagation();
        event.target.classList.toggle('active');
    }

    _remove(event) {
        event.stopPropagation();
        this._element.remove();
    }

    _setEventListeners() {
        this._element.addEventListener(CLICK_EVENT, () => {
            this._handleCardClick({link: this._link, name: this._name});
        });
        this._element.querySelector('.elements__like').addEventListener(CLICK_EVENT, this._like);
        this._element.querySelector('.elements__delete').addEventListener(CLICK_EVENT, this._remove);
    }
}

export default Card;