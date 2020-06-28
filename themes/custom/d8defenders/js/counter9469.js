/**
 * @file
 * Behaviors for the d8coders counter.
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.counter = {
    attach: function (context) {
      $('.counter').once().counterUp({
        delay: 10,
        time: 1000
      });
    }
  };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
