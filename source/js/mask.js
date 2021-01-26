'use strict';
(function () {

  var inputTel = document.getElementById('.form__input--tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(inputTel, maskOptions);

}());


