import { Popup } from './Popup.js';

export default class PopupWithIConfirm extends Popup {
    constructor( popupSelector) {
        super(popupSelector);
        
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm()
            this.close()
        });}

}