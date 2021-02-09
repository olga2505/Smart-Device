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

  inputTelPopup.addEventListener('focus', function () {
    var maskPopup = IMask(inputTelPopup, maskOptions);
  });

  feedbackTel.addEventListener('focus', function () {
    var maskFeedback = IMask(feedbackTel, maskOptions);
  });

}());

'use strict';

(function () {
  var buttonOpenPopup = document.querySelector('.page-header__call');
  var pageBody = document.querySelector('.page-body');
  var popup = document.querySelector('.popup');
  var popupClose = document.querySelector('.popup__close');
  var form = document.querySelector('.popup__form');
  var overlay = document.querySelector('.overlay');

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

  buttonOpenPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    pageBody.classList.add('page-body--no-scroll');
    popup.classList.remove('popup__hidden');
    overlay.classList.remove('overlay__hidden');

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
    if (!userName.value || !userTel.value || !checkboxPopup.checked) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userTel', userTel.value);
        localStorage.setItem('userText', userText.value);
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
})();

'use strict';

(function () {
  var buttonAdvantages = document.querySelector('.main-block__scroll');
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

  var titleSection = document.querySelector('.site-sections h2');
  var buttonSections = document.querySelector('.site-sections__button');
  var siteSectionsList = document.querySelector('.site-sections__list');

  var titleContacts = document.querySelector('.contacts__wrap h2');
  var buttonContacts = document.querySelector('.contacts__button');
  var contactsBlock = document.querySelector('.contacts__block');

  titleSection.addEventListener('click', function () {
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

  titleContacts.addEventListener('click', function () {
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
