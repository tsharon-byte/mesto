const AVATAR_EP = '/users/me/avatar';
const USERS_EP = '/users/me';
const CARDS_EP = '/cards';
class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._get = this._get.bind(this);
        this._patch = this._patch.bind(this);
    }

    _get(ep) {
        return fetch(this._baseUrl + ep, {
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    _patch(ep, data) {
        return fetch(this._baseUrl + ep, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    _post(ep, data) {
        return fetch(this._baseUrl + ep, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    _put(ep, data) {
        return fetch(this._baseUrl + ep, {
            headers: this._headers,
            method: 'PUT',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    _delete(ep, cardId) {
        return fetch(this._baseUrl + ep, {
            headers: this._headers,
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getInitialCards() {
        return this._get(CARDS_EP);
    }

    getUserInfo() {
        return this._get(USERS_EP);
    }

    patchUserInfo(data) {
        return this._patch(USERS_EP, data);
    }

    patchAvatar(data) {
        return this._patch(AVATAR_EP, data);
    }

    postCard(data) {
        return this._post(CARDS_EP, data);
    }

    deleteCard(cardId) {
        return this._delete(CARDS_EP+ `/${cardId}`, cardId);
    }

    putCardLikes(cardId) {
        return this._put(`${CARDS_EP}/${cardId}/likes`, cardId);
    }

    deleteCardLikes(cardId) {
        return this._delete(`${CARDS_EP}/${cardId}/likes`, cardId);
    }
}

export default Api;