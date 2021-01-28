'use strict';
(function () {

  var inputTelPopup = document.getElementById('feedback-tel-popup');
  var feedbackTel = document.getElementById('feedback-tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
  };

  inputTelPopup.addEventListener('click', function () {
    var maskPopup = IMask(inputTelPopup, maskOptions);
    var maskFeedback = IMask(feedbackTel, maskOptions);
  });

}());
