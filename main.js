(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(t){var r=this,o=t.item,i=t.templateSelector,a=t.userId,u=t.handleCardClick,c=t.handleDeleteClick,l=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"createCardMarkup",(function(){return r._card=r._template.cloneNode(!0),r._buttonLike=r._card.querySelector(".element__like"),r._buttonDelete=r._card.querySelector(".element__btn-delete"),r._elementImage=r._card.querySelector(".element__image"),r._likeCount=r._card.querySelector(".element__like-count"),r._elementImage.src=r._link,r._elementImage.alt=r._name,r._card.querySelector(".element__text").textContent=r._name,r._setListeners(),r._setCountLike(),r._setChekedLike(),r._setButtonDelete(),r._card})),n(this,"isLiked",(function(){return r._buttonLike.classList.contains("element__like_checked")})),n(this,"_setListeners",(function(){r._buttonDelete.addEventListener("click",r._handleDeleteClick),r._buttonLike.addEventListener("click",r._handleLikeClick),r._elementImage.addEventListener("click",(function(){r._handleCardClick(r._link,r._name)}))})),n(this,"toggleLike",(function(){r._buttonLike.classList.toggle("element__like_checked")})),n(this,"_setButtonDelete",(function(){r._item.owner._id===r._userId&&r._buttonDelete.classList.add("element__btn-delete_seted")})),n(this,"_setCountLike",(function(){r._likeCount.textContent=r._likes.length})),n(this,"changeLikeCount",(function(e){r._likeCount.textContent=e.likes.length})),n(this,"_setChekedLike",(function(){r._likes.forEach((function(e){e._id===r._userId&&r._buttonLike.classList.add("element__like_checked")}))})),n(this,"deleteCard",(function(){r._card.remove(),r._card=null})),this._item=o,this._name=o.name,this._link=o.link,this._likes=o.likes,this._id=o._id,this._templateSelector=i,this._handleCardClick=u,this._template=document.querySelector(this._templateSelector).content.querySelector(".element"),this._handleDeleteClick=c,this._handleLikeClick=l,this._userId=a}));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.name,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),i(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.name,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),i(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),i(this,"enableValidation",(function(){r._setEventListeners()})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"_toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=c((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"render",(function(e){e.forEach((function(e){r._renderer(e)}))})),l(this,"addItem",(function(e){r._container.prepend(e)})),this._renderer=o,this._container=document.querySelector(n)}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleClosePopup",(function(e){(e.target.classList.contains("popup__btn-exit")||e.target.classList.contains("popup"))&&n.close()})),p(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClosePopup)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupFigcaption=t._popup.querySelector(".popup__figcaption"),t}return t=a,(n=[{key:"open",value:function(e,t){y(g(a.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt=t,this._popupFigcaption.textContent=t}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmitForm=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._popup.querySelectorAll(".input__text")),t._buttonSave=t._popup.querySelector(".popup__btn-save"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;C(j(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){C(j(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setLoadingButton",value:function(e){e?this._buttonSave.textContent="Cохранение...":e||(this._buttonSave.textContent="Сохранить")}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function D(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._confirmButton=t._popup.querySelector(".popup__btn-save"),t}return t=a,(n=[{key:"setEventListeners",value:function(){q(B(a.prototype),"setEventListeners",this).call(this)}},{key:"setConfirmAction",value:function(e){this._confirmButton.addEventListener("click",e)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return t&&V(e.prototype,t),n&&V(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=U((function e(t){var n=this,r=t.profileNameSelector,o=t.profileJobSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"getUserInfo",(function(){return{name:n._profileName.textContent,job:n._profileJob.textContent}})),N(this,"setUserInfo",(function(e){n._profileName.textContent=e.name,n._profileJob.textContent=e.about,n._avatar.src=e.avatar})),N(this,"getAvatar",(function(){return n._avatar.src})),N(this,"setAvatar",(function(e){n._avatar.src=e.avatar})),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(o),this._avatar=document.querySelector(i)}));function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok||Promise.reject("Ошибка: ".concat(e.status)),e.json()}},{key:"getAllCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"updateUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return console.log(e),t._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),H=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),$=document.querySelector(".profile__avatar-button"),G=document.querySelector(".input__text_type_name"),K=document.querySelector(".input__text_type_job"),Q=document.forms.profileEdit,W=document.forms.placeAdd,X=document.forms.avatarChange,Y=(document.querySelector(".input__text_type_avatar"),document.querySelectorAll(".popup__btn-save"),{formSelector:".popup__form",inputSelector:".input__text",submitButtonSelector:".popup__btn-save",inactiveButtonClass:"popup__btn-save_inactive",inputErrorClass:"input__text_type_error",errorClass:"popup__input-error_active"});function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=null,te=new M({url:"https://mesto.nomoreparties.co/v1/cohort-50/",headers:{authorization:"6df29fdd-ef30-40f2-9646-a62800cbaefa","content-type":"application/json"}}),ne=new F({profileNameSelector:".profile__name",profileJobSelector:".profile__job",profileAvatarSelector:".profile__avatar-img"}),re=new P({popupSelector:".popup_edit",handleSubmitForm:function(e){he(!0,re),te.editProfile({name:e.nameInput,about:e.jobInput}).then((function(e){ne.setUserInfo(e),re.close()})).catch((function(e){return console.log(e)})).finally((function(){he(!1,re)}))}});re.setEventListeners();var oe=new k(".popup_place");oe.setEventListeners();var ie=new T(".popup_confirm");ie.setEventListeners();var ae=new P({popupSelector:".popup_avatar",handleSubmitForm:function(e){he(!0,ae),te.changeAvatar(e).then((function(e){ne.setAvatar(e),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){he(!1,ae)}))}});ae.setEventListeners();var ue=new P({popupSelector:".popup_add",handleSubmitForm:function(e){var t=te.addCard(e);he(!0,ue),t.then((function(e){var t=fe(e);pe.addItem(t),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){he(!1,ue)}))}});ue.setEventListeners(),z.addEventListener("click",(function(){ue.open(),le.resetValidation()}));var ce=new a(Y,Q),le=new a(Y,W),se=new a(Y,X);ce.enableValidation(),le.enableValidation(),se.enableValidation();var fe=function(e){var t=new r({item:e,templateSelector:".element-template",userId:ee,handleCardClick:function(e,t){oe.open(e,t)},handleDeleteClick:function(){ie.open(),ie.setConfirmAction((function(e){e.stopImmediatePropagation(),te.deleteCard(t._id).then((function(){t.deleteCard(),ie.close()})).catch((function(e){return console.log(e)}))}))},handleLikeClick:function(){t.isLiked()?te.deleteLike(t._id).then((function(e){t.changeLikeCount(e),t.toggleLike()})).catch((function(e){return console.log(e)})):te.setLike(t._id).then((function(e){t.changeLikeCount(e),t.toggleLike()})).catch((function(e){return console.log(e)}))}});return t.createCardMarkup()};H.addEventListener("click",(function(){var e;e=ne.getUserInfo(),G.value=e.name,K.value=e.job,re.open(),ce.resetValidation()})),$.addEventListener("click",(function(){ne.getAvatar(),ae.open(),ce.resetValidation()}));var pe=new s({renderer:function(e){var t=fe(e);pe.addItem(t)}},".elements");function he(e,t){t.setLoadingButton(e)}te.updateUserInfo().then((function(e){return ne.setUserInfo(e),ee=e._id,e})).catch((function(e){return console.log(e)})),Promise.all([te.updateUserInfo(),te.getAllCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(o),ee=o._id,pe.render(i)})).catch((function(e){console.log(e)}))})();