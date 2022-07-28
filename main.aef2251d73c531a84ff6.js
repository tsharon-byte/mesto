(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._avatar=document.querySelector(o)}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id,o=e.avatar;this._nameElement.textContent=t,this._descriptionElement.textContent=n,this._id=r,this._avatar.src=o}},{key:"setAvatar",value:function(e){var t=e.avatar;this._avatar.src=t}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener(b,(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=a(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function a(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}const f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,r,o,a=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this,e))._image=t._element.querySelector(".popup__image"),t._caption=t._element.querySelector(".figure__caption"),t._setEventListeners(),t}return t=f,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._caption.textContent=e.name,s(l(f.prototype),"open",this).call(this)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p="/users/me",_="/cards";const d=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r,this._get=this._get.bind(this),this._patch=this._patch.bind(this)}var t,n;return t=e,(n=[{key:"_get",value:function(e){return fetch(this._baseUrl+e,{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_patch",value:function(e,t){return fetch(this._baseUrl+e,{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_post",value:function(e,t){return fetch(this._baseUrl+e,{headers:this._headers,method:"POST",body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_put",value:function(e,t){return fetch(this._baseUrl+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_delete",value:function(e,t){return fetch(this._baseUrl+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return this._get(_)}},{key:"getUserInfo",value:function(){return this._get(p)}},{key:"patchUserInfo",value:function(e){return this._patch(p,e)}},{key:"patchAvatar",value:function(e){return this._patch("/users/me/avatar",e)}},{key:"postCard",value:function(e){return this._post(_,e)}},{key:"deleteCard",value:function(e){return this._delete(_+"/".concat(e),e)}},{key:"putCardLikes",value:function(e){return this._put("".concat(_,"/").concat(e,"/likes"),e)}},{key:"deleteCardLikes",value:function(e){return this._delete("".concat(_,"/").concat(e,"/likes"),e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var m="#profilePopup",y="#placeAddPopup",v="#avatarEditPopup",b="click",k="open",g=".form__submit",E="show",w=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),C=document.querySelector(".avatar"),L=document.querySelector(".snackbar"),P=document.querySelector(y).querySelector(g),O=document.querySelector(v).querySelector(g),j=document.querySelector(m).querySelector(g),q=new t({nameSelector:".profile__name",descriptionSelector:".profile__description",avatarSelector:".avatar__picture"}),I=new f("#placeViewerPopup"),x=new d({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-46",headers:{authorization:"c330429b-3b89-464c-a07c-3bb6ae16281d","Content-Type":"application/json"}});function B(e){L.classList.add(E),L.textContent=e,setTimeout((function(){L.textContent="",L.classList.remove(E)}),3e3),console.error(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const F=function(){function e(t,n,r,o,i,s,a){var c=t.name,u=t.link,l=t._id,f=t.ownerId,h=t.userId,p=t.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=c,this._link=u,this._id=l,this._isMine=f===h,this._selector=n,this._count=p.length,this._isLiked=p.filter((function(e){return e._id===h})).length>0,this._handleCardClick=r,this._handleCardRemove=o,this._putLikePromise=i,this._deleteLikePromise=s,this._cardDeletePopupWithForm=a,this._like=this._like.bind(this),this._remove=this._remove.bind(this),this._setLikes=this._setLikes.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"createElement",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".elements__image"),t=this._element.querySelector(".elements__name"),n=this._element.querySelector(".elements__likes-count"),r=this._element.querySelector(".elements__like");return this._isLiked&&r.classList.add("active"),this._isMine||this._element.querySelector(".elements__delete").classList.add("elements__delete_invisible"),e.src=this._link,e.alt=this._name,n.textContent=this._count,e.id=this._id,t.textContent=this._name,this._element}},{key:"_setLikes",value:function(e){this._element.querySelector(".elements__likes-count").textContent=e}},{key:"_like",value:function(e){var t=this;e.stopPropagation(),e.target.classList.contains("active")?this._deleteLikePromise().then((function(e){return t._setLikes(e.likes.length)})):this._putLikePromise().then((function(e){return t._setLikes(e.likes.length)})),e.target.classList.toggle("active")}},{key:"_remove",value:function(e){var t=this;e.stopPropagation(),this._cardDeletePopupWithForm.open((function(){return t._handleCardRemove().then((function(){return t._element.remove()})).catch((function(e){return"Не удалось удалить, ".concat(e)}))}))}},{key:"_setEventListeners",value:function(){var e=this;this._element.addEventListener(b,(function(){e._handleCardClick({link:e._link,name:e._name})})),this._element.querySelector(".elements__like").addEventListener(b,this._like),this._element.querySelector(".elements__delete").addEventListener(b,this._remove)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const U=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;this._items=e,this._items.forEach((function(e){t._container.appendChild(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=M(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function J(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}const z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._onSubmit=t,n}return t=s,(n=[{key:"createElement",value:function(){return this._form=document.getElementById("".concat(this._element.id,"Form")),this._openEvent=new Event(k),this._setEventListeners(),this}},{key:"getForm",value:function(){return this._form=document.getElementById("".concat(this._element.id,"Form")),this._form}},{key:"open",value:function(e){D(W(s.prototype),"open",this).call(this),this._callback=e,this._form.dispatchEvent(this._openEvent)}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._element.querySelectorAll(".input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setFormValues",value:function(e){this._inputList=this._element.querySelectorAll(".input"),this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_setEventListeners",value:function(){var e=this;D(W(s.prototype),"_setEventListeners",this).call(this),this._form=document.getElementById("".concat(this._element.id,"Form")),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callback&&e._callback(),e._onSubmit(e._getInputValues()),e._form.reset()}))}},{key:"close",value:function(){D(W(s.prototype),"close",this).call(this),this._form.reset()}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._config=t,this._inputArray=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._submitButton=this._form.querySelector(this._config.submitButtonSelector),this.initiateForm=this.initiateForm.bind(this)}var t,n;return t=e,(n=[{key:"_checkFieldIsValid",value:function(e){return e.validity.valid}},{key:"_checkFormIsValid",value:function(){return this._inputArray.every(this._checkFieldIsValid)}},{key:"_getErrorElement",value:function(e){return document.getElementById("".concat(e.id,"-error"))}},{key:"_resetErrorMessage",value:function(e){this._getErrorElement(e).textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_generateErrorMessage",value:function(e){this._getErrorElement(e).textContent=e.validationMessage,this._checkFieldIsValid(e)?e.classList.remove(this._config.inputErrorClass):e.classList.add(this._config.inputErrorClass)}},{key:"setSubmitButtonState",value:function(){this._checkFormIsValid()?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.removeAttribute("disabled")):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled"))}},{key:"initiateForm",value:function(){var e=this;this._inputArray.forEach((function(t){return e._resetErrorMessage(t)})),this.setSubmitButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("input",(function(t){e._generateErrorMessage(t.target,e._config),e.setSubmitButtonState()})),this._form.addEventListener(k,(function(){e.initiateForm()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const K=G,Q={formSelector:".form",inputSelector:".input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disabled",inputErrorClass:"input_type_error"};!function(){function e(e){return new F(e,"#elementTemplate",(function(e){return I.open(e)}),(function(){return x.deleteCard(e._id)}),(function(){return x.putCardLikes(e._id)}),(function(){return x.deleteCardLikes(e._id)}),i).createElement()}var t=new U({renderer:e},".elements"),n=new z(m,(function(e){j.textContent="Сохранение...",x.patchUserInfo(e).then((function(e){q.setUserInfo(e),j.textContent="Сохранить",n.close()})).catch((function(){return B("Ошибка редактирования данных пользователя")}))})).createElement();new K(Q,n.getForm()).enableValidation();var r=new z(y,(function(n){var o=n.placeName,i=n.placeUrl;P.textContent="Создание...",x.postCard({name:o,link:i}).then((function(n){var o=n.name,i=n.link,s=n._id,a=n.likes;t.addItem(e({name:o,link:i,_id:s,isMine:!0,likes:a})),P.textContent="Создать",r.close()})).catch((function(){return B("Ошибка добавления места")}))})).createElement();new K(Q,r.getForm()).enableValidation();var o=new z(v,(function(e){var t=e.avatar;O.textContent="Сохранение...",x.patchAvatar({avatar:t}).then((function(e){q.setAvatar(e),O.textContent="Сохранить",o.close()})).catch((function(){return B("Ошибка обновления аватара пользователя")}))})).createElement();new K(Q,o.getForm()).enableValidation();var i=new z("#cardDeletePopup",(function(){i.close()})).createElement();x.getUserInfo().then((function(e){q.setUserInfo(e),x.getInitialCards().then((function(n){t.render(n.map((function(t){var n=t.name,r=t.link,o=t._id,i=t.owner,s=t.likes;return{name:n,link:r,_id:o,ownerId:i._id,userId:e._id,likes:s}})))})).catch((function(){return B("Ошибка получения карточек")}))})).catch((function(){return B("Ошибка получения данных пользователя")})),w.addEventListener(b,(function(){n.setFormValues(q.getUserInfo()),n.open()})),S.addEventListener(b,(function(){r.open()})),C.addEventListener(b,(function(){o.open()}))}()})();