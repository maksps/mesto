
export class Card {

    constructor(name, link, templateSelector, cardClickHandler) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._cardClickHandler = cardClickHandler;
        this._template = document.querySelector(this._templateSelector).content.querySelector('.element');
    }

    createCard = () => {
        this._card = this._template.cloneNode(true);
        this._elementImage = this._card.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._card.querySelector('.element__text').textContent = this._name;
        this._setListeners();
        return this._card
    }

    _setListeners = () => {
        this._buttonLike = this._card.querySelector('.element__like');
        this._card.querySelector('.element__btn-delete').addEventListener('click', this._delClickHandler);
        this._buttonLike.addEventListener('click', this._addRemoveLike);
        this._elementImage.addEventListener('click', () => {this._cardClickHandler(this._link, this._name)} );
    }

    _delClickHandler = () => {
        this._card.remove();
        this._card = null;
    }
    
    _addRemoveLike = () => {
        this._buttonLike.classList.toggle('element__like_checked');
    }
    
}

