'use strict';
(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  inputTelPopup.addEventListener('focus', function () {
    var maskPopup = IMask(inputTelPopup, maskOptions);
  });

  feedbackTel.addEventListener('focus', function () {
    var maskFeedback = IMask(feedbackTel, maskOptions);
  });

}());
