import { Popup } from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputForms = this._popup.querySelectorAll('.input__text');
        // const inputList = []
        const inputValues = {};
        this._inputForms.forEach((inputForm) => (inputValues[inputForm.name] = inputForm.value));
        // inputList.push(inputValues);
        return inputValues;
    }

    setEventListeners() {

        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues())
            this.close()
        });

    }

    close() {
        super.close();
        this._form.reset();

    }








}