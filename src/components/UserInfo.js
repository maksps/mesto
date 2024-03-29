export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
    }


    getUserInfo = () => {
        const userInfo = { name: this._profileName.textContent, job: this._profileJob.textContent};
        return userInfo;
    }

    setUserInfo = (item) => {
        this._profileName.textContent = item.name;
        this._profileJob.textContent = item.about;
        this._avatar.src = item.avatar;

    }

    getAvatar = () =>{
        const avatar = this._avatar.src;
        return avatar;
    }

    setAvatar = (item) => {
        this._avatar.src = item.avatar;
    }
}