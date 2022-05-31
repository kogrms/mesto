(()=>{"use strict";var e="",t=[{name:"Санкт-Петербург",link:e+"f3d3f3c00edd744a17ab.jpg"},{name:"Москва",link:e+"c1e2e4b00b022259e610.jpg"},{name:"Кижи",link:e+"b482cd87b461ab031ceb.jpg"},{name:"Хибины",link:e+"c0361c4ef5387f06d882.jpg"},{name:"Мурманск",link:e+"aee0bada2da4c8bad02d.jpg"},{name:"Кронштадт",link:e+"a1d02b9ede33010b86f2.jpg"}],n={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input_type_error"},r=document.querySelector(".popup_type_edit"),o=document.querySelector(".popup_type_add"),i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),a=r.querySelector(".form"),c=a.querySelector(".form__input_value_name"),l=a.querySelector(".form__input_value_position"),s=o.querySelector(".form");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._handleCardClick=r,this._name=t.name,this._link=t.link}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_getImage",value:function(){return this._element.querySelector(".card__image")}},{key:"_handleDeleteClick",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeClick",value:function(){this._element.querySelector(".card__like").classList.toggle("card__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__delete").addEventListener("click",(function(){e._handleDeleteClick()})),this._element.querySelector(".card__like").addEventListener("click",(function(){e._handleLikeClick()})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._getImage(),this._setEventListeners(),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".card__heading").textContent=this._name,this._element}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=y((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_showInputError",(function(e,t){var n=document.getElementById("".concat(e.id,"-error"));e.classList.add(r._obj.inputErrorClass),n.textContent=t})),d(this,"_hideInputError",(function(e){var t=document.getElementById("".concat(e.id,"-error"));e.classList.remove(r._obj.inputErrorClass),t.textContent=""})),d(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),d(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),d(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():(r._buttonElement.classList.remove(r._obj.inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),d(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",function(){this._checkInputValidity(e),this._toggleButtonState()}.bind(r))}))})),d(this,"enableValidation",(function(){r._setEventListeners()})),d(this,"disableSubmitButton",(function(){r._buttonElement.classList.add(r._obj.inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)})),d(this,"resetValidation",(function(){r._inputList.forEach((function(e){r._toggleButtonState(),r._hideInputError(e)}))})),this._obj=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._obj.inputSelector)),this._buttonElement=this._formElement.querySelector(this._obj.submitButtonSelector)}));function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profilePosition=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileNameInput:this._profileName.textContent,profileInfoInput:this._profilePosition.textContent}}},{key:"setUserInfo",value:function(e,t){this._profileName.textContent=e,this._profilePosition.textContent=t}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target===t.currentTarget)&&e.close()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function I(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popupElement.querySelector(".form"),t._inputList=Array.from(t._popupElement.querySelectorAll(".form__input")),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;j(P(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),j(P(u.prototype),"close",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function x(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup__photo"),t._title=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){B(D(u.prototype),"open",this).call(this),this._image.src=e.link,this._title.textContent=e.name,this._image.alt=e.name}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function N(e){return new p(e,".card-template",(function(){U.open({name:e.name,link:e.link})})).generateCard()}var F=new b({items:t,renderer:function(e){F.addItem(N(e))}},".cards__container");F.renderItems();var U=new A(".popup_type_image");U.setEventListeners();var M=new m(n,a);M.enableValidation();var z=new m(n,s);z.enableValidation();var G=new g(".profile__name",".profile__position"),H=new C({popupSelector:".popup_type_edit",handleFormSubmit:function(e){G.setUserInfo(e.name,e.position),H.close()}});H.setEventListeners();var J=new C({popupSelector:".popup_type_add",handleFormSubmit:function(e){F.addItem(N({name:e.place,link:e.link})),J.close()}});J.setEventListeners(),i.addEventListener("click",(function(){c.value=G.getUserInfo().profileNameInput,l.value=G.getUserInfo().profileInfoInput,H.open(),M.resetValidation()})),u.addEventListener("click",(function(){J.open(),z.resetValidation()}))})();