'use strict';

(function () {
  var buttonOpenPopup = document.querySelector('.page-header__call');
  var popup = document.querySelector('.popup');
  var popupClose = document.querySelector('.popup__close');

  var userName = popup.querySelector('[name=user-name]');
  var userTel = popup.querySelector('[name=user-tel]');
  var userText = popup.querySelector('[name=feedback-question]');

  var isStorageSupport = true;
  var storageName = '';
  var storageTel = '';
  var storageText = '';

  try {
    storageName = localStorage.getItem('userName');
    storageTel = localStorage.getItem('userTel');
    storageText = localStorage.getItem('userText');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageName) {
    userName.value = storageName;
    if (storageTel) {
      storageTel.value = storageTel;
    } else {
      userTel.focus();
    }
    userText.focus();
  } else {
    userName.focus();
  }

  buttonOpenPopup.addEventListener('click', function () {
    popup.classList.remove('popup__hidden');
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
