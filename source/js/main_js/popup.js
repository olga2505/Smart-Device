'use strict';

(function () {
  var buttonOpenPopup = document.querySelector('.page-header__call');
  var pageBody = document.querySelector('.page-body');
  var popup = document.querySelector('.popup');
  var popupClose = document.querySelector('.popup__close');
  var formPopup = document.querySelector('.popup__form');
  var overlay = document.querySelector('.overlay');

  var userNamePopup = popup.querySelector('[name=user-name-popup]');
  var userTelPopup = popup.querySelector('[name=user-tel-popup]');
  var userTexPopupt = popup.querySelector('[name=feedback-question-popup]');
  var checkboxPopup = popup.querySelector('.popup__consent input');

  var isStorageSupport = true;
  var storageNamePopup = '';
  var storageTelPopup = '';
  var storageMessagePopup = '';

  try {
    storageNamePopup = localStorage.getItem('userNamePopup');
    storageTelPopup = localStorage.getItem('userTelPopup');
    storageMessagePopup = localStorage.getItem('userTextPopup');
  } catch (err) {
    isStorageSupport = false;
  }

  buttonOpenPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    pageBody.classList.add('page-body--no-scroll');
    popup.classList.remove('popup__hidden');
    overlay.classList.remove('overlay__hidden');

    if (storageNamePopup) {
      userNamePopup.value = storageNamePopup;
      if (storageTelPopup) {
        userTelPopup.value = storageTelPopup;
        userTexPopupt.value = storageMessagePopup;
      } else {
        userTelPopup.focus();
      }
      userTexPopupt.focus();
    } else {
      userNamePopup.focus();
    }
  });

  var closeModal = function () {
    popup.classList.add('popup__hidden');
    overlay.classList.add('overlay__hidden');
    pageBody.classList.remove('page-body--no-scroll');
  };

  formPopup.addEventListener('submit', function (evt) {
    if (!userNamePopup.value || !userTelPopup.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userNamePopup', userNamePopup.value);
        localStorage.setItem('userTelPopup', userTelPopup.value);
        localStorage.setItem('userTextPopup', userTexPopupt.value);
        closeModal();
      }
    }
  });

  popupClose.addEventListener('click', function () {
    closeModal();

  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!popup.classList.contains('popup__hidden')) {
        closeModal();
      }
    }
  });

  if (popup.classList.contains('popup__hidden')) {
    overlay.addEventListener('click', function () {
      closeModal();
    });
  }
})();
