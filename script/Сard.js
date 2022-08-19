
export class Card {
    
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }

    _setListeners = () => {
        
      const  card = this._templateSelector.cloneNode(true);
        card.querySelector('.element__btn-delete').addEventListener('click', console.log(';;;;'));
        // card.querySelector('.element__like').addEventListener('click', addRemoveLike);
    }

    _delClickHandler = (event) => {
    const element = event.target.closest('.element');
    console.log(event);
    element.remove();
}

createCard = () => {
    const card = this._templateSelector.cloneNode(true);
    const elementImage = card.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    card.querySelector('.element__text').textContent = this._name;
    this._setListeners();

    return card
}
}