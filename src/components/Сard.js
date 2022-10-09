
export class Card {

    constructor(item, templateSelector,userId, handleCardClick, handleDeleteClick,  handleLikeClick) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._id = item._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._template = document.querySelector(this._templateSelector).content.querySelector('.element');
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick
        // this._api = api;
        this._userId = userId; // сдесь почемуто null
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
        // this.setButtonDelete();
        return this._card
    }

    _setListeners = () => {
        this._buttonDelete.addEventListener('click', this._handleDelete);
        this._buttonLike.addEventListener('click', this._toggleLike);
        this._elementImage.addEventListener('click', () => { this._handleCardClick(this._link, this._name) });
    }

    _handleDelete = () => {
        this._popupWithConfirm.open();
        this._popupWithConfirm.setEventListeners(this._handleClickConfirm);
    }

    _handleClickConfirm = () => {
        this._api.deleteCard(this._id)
            .then(() => {
                this._card.remove();
                this._card = null;
                this._popupWithConfirm.close();
            }).catch((err) => console.log(err));
    }

setLikesCount = (cardInfo) => {
    this._likeCount.textContent = cardInfo.likes.length;
}


    // _toggleLike = () => {
    //     this._buttonLike.classList.toggle('element__like_checked');
    //     if (this._buttonLike.classList.contains('element__like_checked')) {
    //         this._api.setLike(this._id)
    //             .then((item) => {
    //                 this._likeCount.textContent = item.likes.length;
    //             }).catch((err) => console.log(err));
    //     } else {
    //         this._api.deleteLike(this._id)
    //             .then((item) => {
    //                 this._likeCount.textContent = item.likes.length;
    //             }).catch((err) => console.log(err));
    //     }
    // }

    setButtonDelete = (popupWithConfirm, item) => {
        if (item.owner._id === this._userId) {
            this._popupWithConfirm = popupWithConfirm;
            this._buttonDelete.classList.add('element__btn-delete_seted');
        }
    }

    _setCountLike = () => {
        this._likeCount.textContent = this._likes.length;
    }

    _setChekedLike = () => {
        this._likes.forEach(element => {
            if (element._id === this._userId) {
                this._buttonLike.classList.add('element__like_checked');
            }
        });
    }

}
