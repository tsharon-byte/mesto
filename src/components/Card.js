import {CLICK_EVENT} from '../utils/constants';

class Card {
    constructor({
                    name,
                    link,
                    _id,
                    ownerId,
                    userId,
                    likes
                }, selector, handleCardClick, handleCardRemove, handlePutLike, handleDeleteLike, cardDeletePopupWithForm) {
        this._name = name;
        this._link = link;
        this._id = _id;
        this._isMine = ownerId === userId;
        this._selector = selector;
        this._count = likes.length;
        this._isLiked = likes.filter(item => item._id === userId).length > 0;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._putLikePromise = handlePutLike;
        this._deleteLikePromise = handleDeleteLike;
        this._cardDeletePopupWithForm = cardDeletePopupWithForm;
        this._like = this._like.bind(this);
        this._remove = this._remove.bind(this);
        this._setLikes = this._setLikes.bind(this);
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
        const likes = this._element.querySelector('.elements__likes-count');
        const heart = this._element.querySelector('.elements__like');
        if (this._isLiked) {
            heart.classList.add('active');
        }
        if (!this._isMine) {
            this._element.querySelector('.elements__delete').classList.add('elements__delete_invisible');
        }

        image.src = this._link;
        image.alt = this._name;
        likes.textContent = this._count;
        image.id = this._id;
        elementName.textContent = this._name;

        return this._element;
    }

    _setLikes(count) {
        const likes = this._element.querySelector('.elements__likes-count');
        likes.textContent = count;
    }

    _like(event) {
        event.stopPropagation();
        if (event.target.classList.contains('active')) {
            this._deleteLikePromise().then(data => this._setLikes(data.likes.length));
        } else {
            this._putLikePromise().then(data => this._setLikes(data.likes.length));
        }
        event.target.classList.toggle('active');
    }

    _remove(event) {
        event.stopPropagation();
        this._cardDeletePopupWithForm.open(() => this._handleCardRemove().then(() => this._element.remove()).catch(err => `Не удалось удалить, ${err}`));
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