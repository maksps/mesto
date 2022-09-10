export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);

    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleClosePopup)
    }

    _handleClosePopup = (evt) =>{
        if (evt.target.classList.contains('popup__btn-exit') || evt.target.classList.contains('popup')) {
            this.close();
            }
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
            
        }
    }
}