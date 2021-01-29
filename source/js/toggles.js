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
