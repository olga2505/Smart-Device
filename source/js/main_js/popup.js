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

  var formFeedback = document.querySelector('.feedback__form');
  var userName = formFeedback.querySelector('[name=user-name]');
  var userTel = formFeedback.querySelector('[name=user-tel]');
  var userText = formFeedback.querySelector('[name=feedback-question]');
  var checkboxForm = formFeedback.querySelector('.form__consent input');

  var isStorageSupport = true;
  var storageName = '';
  var storageTel = '';
  var storageMessage = '';

  try {
    storageName = localStorage.getItem('userNamePopup');
    storageTel = localStorage.getItem('userTelPopup');
    storageMessage = localStorage.getItem('userTextPopup');
  } catch (err) {
    isStorageSupport = false;
  }

  buttonOpenPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    pageBody.classList.add('page-body--no-scroll');
    popup.classList.remove('popup__hidden');
    overlay.classList.remove('overlay__hidden');

    if (storageName) {
      userNamePopup.value = storageName;
      if (storageTel) {
        userTelPopup.value = storageTel;
        userTexPopupt.value = storageMessage;
      } else {
        userTelPopup.focus();
      }
      userTexPopupt.focus();
    } else {
      userNamePopup.focus();
    }
  });

  formPopup.addEventListener('submit', function (evt) {
    if (!userNamePopup.value || !userTelPopup.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userNamePopup', userNamePopup.value);
        localStorage.setItem('userTelPopup', userTelPopup.value);
        localStorage.setItem('userTextPopup', userTexPopupt.value);
      }
    }
  });

  var closeModal = function () {
    popup.classList.add('popup__hidden');
    overlay.classList.add('overlay__hidden');
    pageBody.classList.remove('page-body--no-scroll');
  };

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

  formFeedback.addEventListener('submit', function (evt) {
    if (!userName.value || !userTel.value || !checkboxForm.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userNamePopup', userName.value);
        localStorage.setItem('userTelPopup', userTel.value);
        localStorage.setItem('userTextPopup', userText.value);
        formFeedback.submit();
      }
    }
  });
})();
