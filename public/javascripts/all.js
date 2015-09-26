(function() {
  $(window).load(function() {
    return $('.wrap-right-aside').mCustomScrollbar({
      theme: 'minimal-dark',
      scrollInertia: 100
    });
  });

}).call(this);

(function() {
  'use strict';
  $(document).ready(function() {
    var $document, $profileLink, $searchForm, $searchInput, $searchLink, $searchLinkClose;
    $searchForm = $('#search-form');
    $searchInput = $('#search-input');
    $searchLink = $('#search-link');
    $searchLinkClose = $('#search-link-close');
    $profileLink = $('#profile-link');
    $document = $(document);
    $searchLink.on('click', function(e) {
      e.preventDefault();
      $searchForm.show('blind', {
        direction: 'up'
      }, 200);
      $searchLinkClose.rotate({
        angle: -60,
        animateTo: 0
      });
      return $searchInput.focus();
    });
    $searchLinkClose.on('click', function(e) {
      e.preventDefault();
      $searchForm.hide('blind', {
        direction: 'up'
      }, 200);
      return $searchLinkClose.rotate({
        angle: 0,
        animateTo: -60
      });
    });
    $profileLink.on('click', function() {
      var $arrow, $menu, $this;
      $this = $(this);
      $menu = $this.children('.profile-menu');
      $arrow = $this.find('.fa.fa-angle-down');
      if ($menu.is(':visible')) {
        $arrow.rotate({
          animateTo: 0
        });
      } else {
        $arrow.rotate({
          animateTo: -180
        });
      }
      $menu.stop(false, false);
      return $menu.toggle("drop", {
        direction: 'up'
      }, 200);
    });
    return $document.on('click', 'html', function(e) {
      var $arrow, $profileMenu;
      if (!$(e.target).closest("#profile-link").length) {
        $profileMenu = $('.profile-menu');
        $arrow = $profileMenu.parent().find('.fa.fa-angle-down');
        $arrow.rotate({
          animateTo: 0
        });
        return $profileMenu.hide('drop', {
          direction: 'up'
        }, 200);
      }
    });
  });

}).call(this);
