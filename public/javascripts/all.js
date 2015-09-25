(function() {


}).call(this);

(function() {
  'use strict';
  $(document).ready(function() {
    var $searchForm, $searchInput, $searchLink, $searchLinkClose;
    $searchForm = $('#search-form');
    $searchInput = $('#search-input');
    $searchLink = $('#search-link');
    $searchLinkClose = $('#search-link-close');
    $searchLink.on('click', function(e) {
      e.preventDefault();
      $searchForm.css({
        'bottom': 0
      });
      $searchInput.focus();
    });
    $searchLinkClose.on('click', function(e) {
      e.preventDefault();
      $searchForm.css({
        'bottom': '100%'
      });
    });
  });

}).call(this);
