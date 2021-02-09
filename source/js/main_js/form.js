'use strict';

(function () {
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
    storageName = localStorage.getItem('userName');
    storageTel = localStorage.getItem('userTel');
    storageMessage = localStorage.getItem('userText');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageName) {
    userName.value = storageName;
    if (storageTel) {
      userTel.value = storageTel;
      userText.value = storageMessage;
    } else {
      userTel.focus();
    }
    userText.focus();
  } else {
    userName.focus();
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
