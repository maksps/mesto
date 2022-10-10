import { Popup } from './Popup.js'; 
export default class PopupWithIConfirm extends Popup { 
    constructor(popupSelector) { 
        super(popupSelector); 
        this._confirmButton = this._popup.querySelector('.popup__btn-save');       
    }

    setConfirmAction(action) { 
        this._handleConfirmCallback = action;
    } 

    setEventListeners() { 
           
        this._confirmButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleConfirmCallback();
        })
        super.setEventListeners();
    } 

 

  
}