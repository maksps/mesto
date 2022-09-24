
export class Card {

    constructor(item, templateSelector, handleCardClick, api) {
        this._name = item.name;
        this._link = item.link;
        this._id = item._id;
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
        this._popupWithConfirm.setEventListeners(this._deleteServerPromise);

        // this._card.remove();
        // this._card = null;  
    }

    _deleteServerPromise = () => {
       
        this._api.deleteCard(this._id).then(() => {
            // this._view.remove();
            this._card.remove();
            this._card = null;
        }).catch((err) => console.log(err));
    }



    _toggleLike = () => {
        this._buttonLike.classList.toggle('element__like_checked');
       
    }

    setButtonDelete = (popupWithConfirm, item) => {
        if (item.owner._id === 'aeec8bcd4663f0fdd55a07a0') {
            this._popupWithConfirm = popupWithConfirm;
           
            this._buttonDelete.classList.add('element__btn-delete_seted');

        }
    }



}

