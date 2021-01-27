'use strict';

(function () {
  var buttonOpenPopup = document.querySelector('.page-header__call');
  var popup = document.querySelector('.popup');
  var popupClose = document.querySelector('.popup__close');
  var form = document.querySelector('.popup__form');

  var userName = popup.querySelector('[name=user-name]');
  var userTel = popup.querySelector('[name=user-tel]');
  var userText = popup.querySelector('[name=feedback-question]');

  var isStorageSupport = true;
  var storageName = '';
  var storageTel = '';

  try {
    storageName = localStorage.getItem('userName');
    storageTel = localStorage.getItem('userTel');
  } catch (err) {
    isStorageSupport = false;
  }

  buttonOpenPopup.addEventListener('click', function () {
    popup.classList.remove('popup__hidden');

    if (storageName) {
      userName.value = storageName;
      if (storageTel) {
        userTel.value = storageTel;
      } else {
        userTel.focus();
      }
      userText.focus();
    } else {
      userName.focus();
    }
  });

  form.addEventListener('submit', function (evt) {
    if (!userName.value || !userTel.value || !userText.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userTel', userTel.value);
      }
    }
  });

  popupClose.addEventListener('click', function () {
    popup.classList.add('popup__hidden');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!popup.classList.contains('popup__hidden')) {
        popup.classList.add('popup__hidden');
      }
    }
  });

})();
