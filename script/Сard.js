
export class Card {

    constructor(name, link, templateSelector, openPopup, popupImage, popupFigcaption, popupPlace) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
        this._popupImage = popupImage;
        this._popupFigcaption = popupFigcaption;
        this._popupPlace = popupPlace;
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
        _card.addEventListener('click', this._cardClickHandler);
            //     popupImage.src = link;
            //     popupImage.alt = name;
            //     popupFigcaption.textContent = name;
            //     openPopup(popupPlace);
            //   });
    }

    _delClickHandler = (evt) => {
        const element = evt.target.closest('.element');
        element.remove();
    }
    
    _addRemoveLike = (evt) => {
        const elementLike = evt.target.closest('.element__like');
        elementLike.classList.toggle('element__like_checked');
    }
    _cardClickHandler =(evt) => {
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        this._popupFigcaption.textContent = this._name;
        this._openPopup(this._popupPlace);
    }
}

