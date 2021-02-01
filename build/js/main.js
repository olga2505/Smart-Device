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

'use strict';

(function () {
  var buttonOpenPopup = document.querySelector('.page-header__call');
  var popup = document.querySelector('.popup');
  var popupClose = document.querySelector('.popup__close');
  var form = document.querySelector('.popup__form');

  var userName = popup.querySelector('[name=user-name]');
  var userTel = popup.querySelector('[name=user-tel]');
  var userText = popup.querySelector('[name=feedback-question]');
  var checkboxPopup = popup.querySelector('.popup__consent-input');

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

  buttonOpenPopup.addEventListener('click', function () {
    popup.classList.remove('popup__hidden');

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
  });

  form.addEventListener('submit', function (evt) {
    if (!userName.value || !userTel.value || !userText.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userTel', userTel.value);
        localStorage.setItem('userText', userText.value);
      }
    }
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

'use strict';

(function () {
  // var buttonSections = document.querySelector('.site-sections__button');
  var buttonSections = document.querySelector('.page-footer__site-sections h3');
  var siteSectionsList = document.querySelector('.site-sections__list');
  var buttonContacts = document.querySelector('.contacts__button');
  var contactsBlock = document.querySelector('.contacts__block');

  buttonSections.addEventListener('click', function () {
    if (buttonSections.classList.contains('button-hidden')) {
      buttonSections.classList.remove('button-hidden');
      buttonSections.classList.add('button-show');
      siteSectionsList.classList.toggle('form-show');
    } else {
      buttonSections.classList.add('button-hidden');
      buttonSections.classList.remove('button-show');
      siteSectionsList.classList.toggle('form-show');
    }
  });

  buttonContacts.addEventListener('click', function () {
    if (buttonContacts.classList.contains('button-hidden')) {
      buttonContacts.classList.remove('button-hidden');
      buttonContacts.classList.add('button-show');
      contactsBlock.classList.toggle('form-show');
    } else {
      buttonContacts.classList.add('button-hidden');
      buttonContacts.classList.remove('button-show');
      contactsBlock.classList.toggle('form-show');
    }
  });
})();
