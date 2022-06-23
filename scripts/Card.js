class Card {
    constructor({name, link}, selector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners() {
        this._element.addEventListener('click', event => {
            if (event.target.classList.contains('elements__like')) {
                event.target.classList.toggle('active');
            } else if (event.target.classList.contains('elements__delete')) {
                this._element.remove();
            } else {
                this._handleCardClick({link: this._link, name: this._name});
            }
        })
    }
}

export default Card;