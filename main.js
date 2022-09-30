(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(t,r,o,i,c){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"createCardMarkup",(function(){return u._card=u._template.cloneNode(!0),u._buttonLike=u._card.querySelector(".element__like"),u._buttonDelete=u._card.querySelector(".element__btn-delete"),u._elementImage=u._card.querySelector(".element__image"),u._likeCount=u._card.querySelector(".element__like-count"),u._elementImage.src=u._link,u._elementImage.alt=u._name,u._card.querySelector(".element__text").textContent=u._name,u._setListeners(),u._setCountLike(),u._setChekedLike(),u._card})),n(this,"_setListeners",(function(){u._buttonDelete.addEventListener("click",u._handleDelete),u._buttonLike.addEventListener("click",u._toggleLike),u._elementImage.addEventListener("click",(function(){u._handleCardClick(u._link,u._name)}))})),n(this,"_handleDelete",(function(){u._popupWithConfirm.open(),u._popupWithConfirm.setEventListeners(u._handleClickConfirm)})),n(this,"_handleClickConfirm",(function(){u._api.deleteCard(u._id).then((function(){u._card.remove(),u._card=null})).catch((function(e){return console.log(e)}))})),n(this,"_toggleLike",(function(){u._buttonLike.classList.toggle("element__like_checked"),u._buttonLike.classList.contains("element__like_checked")?u._api.setLike(u._id).then((function(e){u._likeCount.textContent=e.likes.length})).catch((function(e){return console.log(e)})):u._api.deleteLike(u._id).then((function(e){u._likeCount.textContent=e.likes.length})).catch((function(e){return console.log(e)}))})),n(this,"setButtonDelete",(function(e,t){t.owner._id===u._userId&&(u._popupWithConfirm=e,u._buttonDelete.classList.add("element__btn-delete_seted"))})),n(this,"_setCountLike",(function(){u._likeCount.textContent=u._likes.length})),n(this,"_setChekedLike",(function(){u._likes.forEach((function(e){e._id===u._userId&&u._buttonLike.classList.add("element__like_checked")}))})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._templateSelector=r,this._handleCardClick=o,this._template=document.querySelector(this._templateSelector).content.querySelector(".element"),this._api=i,this._userId=c}));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),i(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),i(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),i(this,"enableValidation",(function(){r._setEventListeners()})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"_toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=a((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"render",(function(){r._renderedItems.forEach((function(e){r._renderer(e)}))})),l(this,"addItem",(function(e){r._container.prepend(e)})),this._renderedItems=o,this._renderer=i,this._container=document.querySelector(n)}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleClosePopup",(function(e){(e.target.classList.contains("popup__btn-exit")||e.target.classList.contains("popup"))&&n.close()})),p(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClosePopup)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupFigcaption=t._popup.querySelector(".popup__figcaption"),t}return t=c,(n=[{key:"open",value:function(e,t){y(g(c.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt=t,this._popupFigcaption.textContent=t}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function E(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function c(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._handleSubmitForm=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._popup.querySelectorAll(".input__text")),t._buttonSave=t._popup.querySelector(".popup__btn-save"),t}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;j(P(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues(),e._buttonSave)}))}},{key:"close",value:function(){j(P(c.prototype),"close",this).call(this),this._form.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._confirmButton=t._popup.querySelector(".popup__btn-save"),t}return t=c,(n=[{key:"setEventListeners",value:function(e){var t=this;x(T(c.prototype),"setEventListeners",this).call(this),this._handleClickConfirm=e,this._confirmButton.addEventListener("click",(function(e){e.stopImmediatePropagation(),t._handleClickConfirm(),t.close()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return t&&V(e.prototype,t),n&&V(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=U((function e(t,n){var r=this,o=t.profileNameSelector,i=t.profileJobSelector,c=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"getUserInfoFromApi",(function(){r._api.updateUserInfo().then((function(e){return r.setUserInfo(e),e})).catch((function(e){return console.log(e)}))})),F(this,"getUserInfo",(function(){return{name:r._profileName.textContent,job:r._profileJob.textContent}})),F(this,"setUserInfo",(function(e){r._profileName.textContent=e.name,r._profileJob.textContent=e.about,r._avatar.src=e.avatar})),F(this,"getAvatar",(function(){return r._avatar.src})),F(this,"setAvatar",(function(e){r._avatar.src=e.avatar})),this._profileName=document.querySelector(o),this._profileJob=document.querySelector(i),this._avatar=document.querySelector(c),this._api=n}));function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),z=document.querySelector(".profile__avatar-button"),G=document.querySelector(".input__text_type_name"),K=document.querySelector(".input__text_type_job"),Q=document.forms.profileEdit,X=document.forms.placeAdd,Y=document.forms.avatarChange,Z=document.querySelector(".input__text_type_avatar"),$=(document.querySelectorAll(".popup__btn-save"),{formSelector:".popup__form",inputSelector:".input__text",submitButtonSelector:".popup__btn-save",inactiveButtonClass:"popup__btn-save_inactive",inputErrorClass:"input__text_type_error",errorClass:"popup__input-error_active"}),ee=new M({url:"https://mesto.nomoreparties.co/v1/cohort-50/",headers:{authorization:"6df29fdd-ef30-40f2-9646-a62800cbaefa","content-type":"application/json"}}),te=new N({profileNameSelector:".profile__name",profileJobSelector:".profile__job",profileAvatarSelector:".profile__avatar-img"},ee);function ne(e,t){ae.open(e,t)}te.getUserInfoFromApi(),W.addEventListener("click",(function(){var e;e=te.getUserInfo(),G.value=e.name,K.value=e.job,ue.open(),re.resetValidation()})),z.addEventListener("click",(function(){var e=te.getAvatar();Z.value=e,se.open(),re.resetValidation()}));var re=new c($,Q),oe=new c($,X),ie=new c($,Y);function ce(e,t){var n=new r(e,".element-template",ne,ee,t),o=n.createCardMarkup();return n.setButtonDelete(le,e),o}re.enableValidation(),oe.enableValidation(),ie.enableValidation();var ue=new L({popupSelector:".popup_edit",handleSubmitForm:function(e,t){fe(!0,t),ee.editProfile({name:e.nameInput,about:e.jobInput}).then((function(e){te.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){ue.close(),fe(!1,t)}))}});ue.setEventListeners();var ae=new k(".popup_place");ae.setEventListeners();var le=new D(".popup_confirm");le.setEventListeners();var se=new L({popupSelector:".popup_avatar",handleSubmitForm:function(e,t){fe(!0,t),ee.changeAvatar(e).then((function(e){te.setAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){se.close(),fe(!1,t)}))}});function fe(e,t){e?t.textContent="Cохранение...":e||(t.textContent="Сохранить")}se.setEventListeners(),ee.updateUserInfo().then((function(e){var t=e._id;ee.getAllCards().then((function(e){var n=new s({items:e,renderer:function(e){var r=ce(e,t);n.addItem(r)}},".elements");n.render(),H.addEventListener("click",(function(){r.open(),oe.resetValidation()}));var r=new L({popupSelector:".popup_add",handleSubmitForm:function(e,o){var i=ee.addCard(e);fe(!0,o),i.then((function(e){var r=ce(e,t);n.addItem(r)})).catch((function(e){return console.log(e)})).finally((function(){r.close(),fe(!1,o)}))}});r.setEventListeners()})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})();