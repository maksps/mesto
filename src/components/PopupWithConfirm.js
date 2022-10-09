import { Popup } from './Popup.js';

export default class PopupWithIConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__btn-save');
        
    }

    setEventListeners() {
        super.setEventListeners();      
    }

    setConfirmAction(handleClickConfirm) {
        
        console.log("fff");
        this._confirmButton.addEventListener('click', 
            // evt.stopImmediatePropagation();
            handleClickConfirm
        );
    }

}