
export class Card {

    constructor(name, link, templateSelector, handleCardClick, api) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._template = document.querySelector(this._templateSelector).content.querySelector('.element');
        this._api = api;
    }

    createCardMarkup = () => {
        this._card = this._template.cloneNode(true);
        this._buttonLike = this._card.querySelector('.element__like');
        this._buttonDelete = this._card.querySelector('.element__btn-delete');
        this._elementImage = this._card.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._card.querySelector('.element__text').textContent = this._name;
        this._setListeners();
        return this._card
    }

    _setListeners = () => {
        this._buttonDelete.addEventListener('click', this._handleDelete);
        this._buttonLike.addEventListener('click', this._toggleLike);
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._link, this._name) });
    }

    _handleDelete = () => {
        this._popupWithConfirm.open();
        // this._card.remove();
        // this._card = null;  
    }

    _toggleLike = () => {
        this._buttonLike.classList.toggle('element__like_checked');
        console.log(this._buttonDelete);
        this.setButtonDelete();
    }

    setButtonDelete = (popupWithConfirm) => {
        this._popupWithConfirm = popupWithConfirm;
        this._buttonDelete.classList.add('element__btn-delete_seted');
    }

    

}

