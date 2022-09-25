export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }, api) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._api = api;
    }

    getUserInfoFromApi = () => {
        
        const userData = this._api.getUserInfo();
        userData.then((item) => {
        this._profileName.textContent = item.name;
        this._profileJob.textContent = item.about;
        return item;
        }).catch((err) => alert(err));
    }

    getUserInfo = () => {
        const userInfo = { name: this._profileName.textContent, job: this._profileJob.textContent};
        return userInfo;
    }


    setUserInfo = (inputInfo) => {
        this._profileName.textContent = inputInfo.nameInput;
        this._profileJob.textContent = inputInfo.jobInput;
    }



}