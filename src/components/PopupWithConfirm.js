import { Popup } from './Popup.js';

export default class PopupWithIConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__btn-confirm');
        
    }

    setEventListeners(handleClickConfirm) {
        super.setEventListeners();
        this._handleClickConfirm = handleClickConfirm;
        this._confirmButton.addEventListener('click', (evt) => {
            evt.stopImmediatePropagation();
            this._handleClickConfirm();
            this.close();
        });
    }

}