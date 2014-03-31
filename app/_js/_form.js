(function ($, doc, win) {
  "use strict";

  var
      $form = $('#google-form');

  function completeSubmission() {
    win.location.pathname = '/rsvp/thanks/';
  }

  $form.on('submit', completeSubmission);

})(jQuery, document, window);
