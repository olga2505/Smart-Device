'use strict';

(function () {
  var form = document.querySelector('.feedback');
  var userName = form.querySelector('[name=user-name]');
  var userTel = form.querySelector('[name=user-tel]');
  var userText = form.querySelector('[name=feedback-question]');
  var checkboxPopup = form.querySelector('.form__input-checkbox');

  form.addEventListener('submit', function (evt) {
    if (!userName.value || !userTel.value || !userText.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      form.submit();
    }
  });

})();
