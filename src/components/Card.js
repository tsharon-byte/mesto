import {MOUSE_DOWN_EVENT, showError, UPDATE_LIKE_ERROR_MESSAGE} from '../utils/constants';

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
        this._handleLike = this._handleLike.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
        this._setLikesCount = this._setLikesCount.bind(this);
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
        this._cardImage = this._element.querySelector('.elements__image');
        this._elementName = this._element.querySelector('.elements__name');
        this._likesCount = this._element.querySelector('.elements__likes-count');
        this._likeButton = this._element.querySelector('.elements__like');
        this._deleteButton = this._element.querySelector('.elements__delete')
        this._setEventListeners();
        if (this._isLiked) {
            this._likeButton.classList.add('active');
        }
        if (!this._isMine) {
            this._deleteButton.classList.add('elements__delete_invisible');
        }

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._likesCount.textContent = this._count;
        this._cardImage.id = this._id;
        this._elementName.textContent = this._name;

        return this._element;
    }

    _setLikesCount(count) {
        this._likesCount.textContent = count;
    }

    _handleLike(event) {
        event.stopPropagation();
        let promise;
        // Prevents clicks during request to the server is in process
        event.target.setAttribute('disabled', 'disabled');
        if (event.target.classList.contains('active')) {
            promise = this._deleteLikePromise();
        } else {
            promise = this._putLikePromise();
        }
        promise.then(data => {
            this._setLikesCount(data.likes.length);
            event.target.classList.toggle('active');
        }).catch(showError).finally(() => {
            event.target.removeAttribute('disabled');
        });
    }

    _handleRemove(event) {
        event.stopPropagation();
        this._cardDeletePopupWithForm.open(() => this._handleCardRemove().then(() => this._element.remove()).catch(err => `Не удалось удалить, ${err}`));
    }

    _setEventListeners() {
        this._element.addEventListener(MOUSE_DOWN_EVENT, () => {
            this._handleCardClick({link: this._link, name: this._name});
        });
        this._likeButton.addEventListener(MOUSE_DOWN_EVENT, this._handleLike);
        this._deleteButton.addEventListener(MOUSE_DOWN_EVENT, this._handleRemove);
    }
}

export default Card;