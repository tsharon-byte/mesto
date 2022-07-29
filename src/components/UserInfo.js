class UserInfo {
    constructor({nameSelector, descriptionSelector, avatarSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._descriptionElement = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._descriptionElement.textContent
        }
    }

    setUserInfo({name, about, _id, avatar}) {
        this._nameElement.textContent = name;
        this._descriptionElement.textContent = about;
        this._id = _id;
        this._avatar.src = avatar;
    }
}

export default UserInfo;