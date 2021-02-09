'use strict';

(function () {
  var titleSections = document.querySelector('.page-footer__site-sections h2');
  var titleContacts = document.querySelector('.contacts__wrap h2');
  var siteSectionsButton = document.querySelector('.site-sections__button');
  var contactsButton = document.querySelector('.contacts__button');

  siteSectionsButton.tabIndex = -1;
  contactsButton.tabIndex = -1;

  var checkWidthWindow = function (element) {
    if (window.innerWidth <= 767) {
      element.tabIndex = 0;
    } else {
      element.tabIndex = -1;
    }
  };

  checkWidthWindow(titleSections);
  checkWidthWindow(titleContacts);

  window.addEventListener('resize', function () {
    checkWidthWindow(titleSections);
  });

  window.addEventListener('resize', function () {
    checkWidthWindow(titleContacts);
  });
})();
