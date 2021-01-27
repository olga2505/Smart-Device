'use strict';

(function () {
  var buttonAdvantages = document.querySelector('.main-block__skroll');
  var blockAdvantages = document.querySelector('.advantages');

  var buttonConsultation = document.querySelector('.main-block__consultation');
  var blockConsultation = document.querySelector('.page-main__feedback');


  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }

  buttonAdvantages.addEventListener('click', function () {
    scrollTo(blockAdvantages);
  });

  buttonConsultation.addEventListener('click', function () {
    scrollTo(blockConsultation);
  });
})();
