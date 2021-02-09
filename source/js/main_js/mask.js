'use strict';
(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  inputTelPopup.addEventListener('focus', function () {
    IMask(inputTelPopup, maskOptions);
  });

  feedbackTel.addEventListener('focus', function () {
    IMask(feedbackTel, maskOptions);
  });


  var valideteForms = function (selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
      }
    });
  }

  valideteForms('.feedback__form', {name: {required: true}, tel: {required: true}});
  valideteForms('.popup__form', {namePopup: {required: true}, telPopup: {required: true}});
}());
