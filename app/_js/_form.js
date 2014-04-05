(function ($, doc, win) {
  "use strict";

  var
      $form = $('#google-form');

  function completeSubmission() {
    win.location.pathname = '/rsvp/thanks/';
  }

  $form.on('submit', completeSubmission);


  analytics.trackForm($form, 'RSVP', {
    names: $('#input-adult-names').val(),
    email: $('#input-email').val()
  });

})(jQuery, document, window);
