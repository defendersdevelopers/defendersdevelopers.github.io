(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.facebook_mcc = {
    attach: function (context, settings) {
      // Load configurations
      var app_id = drupalSettings.facebook_mcc_app_id;
      var localization = drupalSettings.facebook_mcc_local;

      // initialize Facebook SDK.
      $('<script> \
          window.fbAsyncInit = function () {\
            FB.init({\
              appId: '+app_id+',\
              autoLogAppEvents: true,\
              xfbml: true,\
              version: \'v3.3\'\
            });\
          };\
        </script>').prependTo('body');

      // Load Facebook Messenger Customer Chat
      $('<script async defer src="https://connect.facebook.net/'+localization+'/sdk/xfbml.customerchat.js"></script>').prependTo('body');

    }
  };
})(jQuery, Drupal);
