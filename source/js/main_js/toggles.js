'use strict';

(function () {

  var titleSection = document.querySelector('.site-sections h2');
  var buttonSections = document.querySelector('.site-sections__button');
  var siteSectionsList = document.querySelector('.site-sections__list');
  var titleContacts = document.querySelector('.contacts__wrap h2');
  var buttonContacts = document.querySelector('.contacts__button');
  var contactsBlock = document.querySelector('.contacts__block');

  buttonSections.classList.remove('no-js');
  buttonSections.classList.add('button-hidden');
  buttonContacts.classList.remove('no-js');
  buttonContacts.classList.add('button-hidden');

  siteSectionsList.classList.add('form-hidden');
  contactsBlock.classList.add('form-hidden');

  var toggleTitleSection = function () {
    if (buttonSections.classList.contains('button-hidden')) {
      buttonSections.classList.remove('button-hidden');
      buttonSections.classList.add('button-show');
      siteSectionsList.classList.toggle('form-hidden');

      buttonContacts.classList.remove('button-show');
      buttonContacts.classList.add('button-hidden');
      contactsBlock.classList.add('form-hidden');
      contactsBlock.classList.remove('form-show');
    } else {
      buttonSections.classList.add('button-hidden');
      buttonSections.classList.remove('button-show');
      siteSectionsList.classList.toggle('form-hidden');
    }
  };

  var toggleTitleContacts = function () {
    if (buttonContacts.classList.contains('button-hidden')) {
      buttonContacts.classList.remove('button-hidden');
      buttonContacts.classList.add('button-show');
      contactsBlock.classList.toggle('form-hidden');

      buttonSections.classList.remove('button-show');
      buttonSections.classList.add('button-hidden');
      siteSectionsList.classList.add('form-hidden');
      siteSectionsList.classList.remove('form-show');
    } else {
      buttonContacts.classList.add('button-hidden');
      buttonContacts.classList.remove('button-show');
      contactsBlock.classList.toggle('form-hidden');
    }
  };

  titleSection.addEventListener('click', function () {
    toggleTitleSection();
  });

  titleSection.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      toggleTitleSection();
    }
  });

  titleContacts.addEventListener('click', function () {
    toggleTitleContacts();
  });

  titleContacts.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      toggleTitleContacts();
    }
  });
})();
