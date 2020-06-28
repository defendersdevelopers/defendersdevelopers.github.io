/**
 * @file
 * Behaviors for the d8coders accordion.
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.accordion = {
    attach: function (context) {
      var section = $('.block-accordion li');

      function toggleAccordion() {
        section.removeClass('active');
        $(this).addClass('active');
      }

      section.on('click', toggleAccordion);
    }
  };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
