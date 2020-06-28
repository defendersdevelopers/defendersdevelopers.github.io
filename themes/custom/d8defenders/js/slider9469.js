/**
 * @file
 * Behaviors for the d8coders slider.
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.slider = {
    attach: function (context) {
      //Moving Image from field to background
      var src = $('.block-slider').find('.field--name-field-image img').attr('src');
      $('.block-slider').find('.field--name-field-image').once().css('background-image',"url('"+src+"')");

      // Applying TypedJs
      // Get Field Contents:
      var textList = [];
      $('.block-slider').find('.field--name-field-animated-text .field--item').once().each(function(){
        textList.push($(this).html());
      });
      $('.block-slider').find('.field--name-field-static-text').once().append(' <span class="append"></span>');
      var options = {
        strings: textList,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
        loopCount: Infinity,
      }

      $('body', context).once("slider").each(function(){ // each as a small trick to apply once
        var typed = new Typed(".field--name-field-static-text .append", options);
      });

    }
  };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
