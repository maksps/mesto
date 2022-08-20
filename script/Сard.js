
export class Card {

    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }

  

    createCard = () => {
        this._card = this._templateSelector.cloneNode(true);
        const elementImage = this._card.querySelector('.element__image');
        elementImage.src = this._link;
        elementImage.alt = this._name;
        this._card.querySelector('.element__text').textContent = this._name;
        this._setListeners(this._card);

        return this._card
    }

    _setListeners = (_card) => {
        _card.querySelector('.element__btn-delete').addEventListener('click', this._delClickHandler);
        _card.querySelector('.element__like').addEventListener('click', this._addRemoveLike);
    }

    _delClickHandler = (evt) => {
        const element = evt.target.closest('.element');
        element.remove();
    }
    
    _addRemoveLike = (evt) => {
        const elementLike = evt.target.closest('.element__like');
        elementLike.classList.toggle('element__like_checked');
    }




}

