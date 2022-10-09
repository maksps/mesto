
export class Card {

    constructor({ item, templateSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick }) {
        this._item = item;
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._id = item._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._template = document.querySelector(this._templateSelector).content.querySelector('.element');
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._userId = userId; // сдесь почемуто null или Id какаято хрннь
        console.log(this._userId);

    }

    createCardMarkup = () => {
        this._card = this._template.cloneNode(true);
        this._buttonLike = this._card.querySelector('.element__like');
        this._buttonDelete = this._card.querySelector('.element__btn-delete');
        this._elementImage = this._card.querySelector('.element__image');
        this._likeCount = this._card.querySelector('.element__like-count');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._card.querySelector('.element__text').textContent = this._name;
        this._setListeners();
        this._setCountLike();
        this._setChekedLike();
        this._setButtonDelete();
        return this._card
    }

    isLiked = () => {
        return this._buttonLike.classList.contains('element__like_checked')
    }

    _setListeners = () => {
        this._buttonDelete.addEventListener('click', this._handleDeleteClick);
        this._buttonLike.addEventListener('click', this._handleLikeClick);
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._link, this._name) });
    }

    toggleLike = () => {
        console.log("qwerty");
        this._buttonLike.classList.toggle('element__like_checked');
    }

    _setButtonDelete = () => {
        console.log(this._item.owner._id);
        if (this._item.owner._id === this._userId) {
            this._buttonDelete.classList.add('element__btn-delete_seted');
        }
    }

    _setCountLike = () => {
        this._likeCount.textContent = this._likes.length;
    }

    changeLikeCount = (item) => {
        this._likeCount.textContent = item.likes.length;
    }

    _setChekedLike = () => {
        this._likes.forEach(element => {
            if (element._id === this._userId) {
                this._buttonLike.classList.add('element__like_checked');
            }
        });
    }
}
