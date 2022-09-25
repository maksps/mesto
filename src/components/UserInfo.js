export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }, api) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._api = api;
    }

    getUserInfoFromApi = () => {

        const userData = this._api.getUserInfo();
        userData.then((item) => {
            this._setUserInfo(item);
            return item;
        }).catch((err) => alert(err));
    }

    getUserInfo = () => {
        const userInfo = { name: this._profileName.textContent, job: this._profileJob.textContent };
        return userInfo;
    }


    _setUserInfo = (item) => {
        this._profileName.textContent = item.name;
        this._profileJob.textContent = item.about;
    }

    updateUserInfo = (data) => {
        const updateData = this._api.editProfile({
            name: data.nameInput,
            about: data.jobInput
        });
        updateData.then((item) => {
            this._setUserInfo(item);
        }).catch((err) => alert(err));
    }
}