import { Popup } from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(link, name, popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupFigcaption = this._popup.querySelector('.popup__figcaption');
        this._name = name;
        this._link = link;
    }

    open() {
        super.open();
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupFigcaption.textContent = this._name;
       
    }

}