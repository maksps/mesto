import { Popup } from './Popup.js';
export default class PopupWithConfirm extends Popup {
    constructor({ popupSelector, handleSubmitDelete}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitDelete(this._getInputValues())
            this.close()
        });

    }

    close() {
        super.close();
        this._form.reset();

    }