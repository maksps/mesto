import { Popup } from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popup.querySelectorAll('.input__text'));
        this._buttonSave = this._popup.querySelector('.popup__btn-save');
        this._buttonDefaultName = this._buttonSave.textContent;
        
    }

    _getInputValues() {

        const inputValues = {};
        this._inputList.forEach((input) => (inputValues[input.name] = input.value));
        return inputValues;

    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            
        });
    };
    close() {
        super.close();
        this._form.reset();
    };

    setLoadingButton(isLoading) {
        if (!isLoading) {
            this._buttonSave.textContent =  this._buttonDefaultName;
                     
        } else {
        this._buttonSave.textContent = 'Сохранение...';}
    }

}