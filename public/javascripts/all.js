(function() {
  'use strict';
  $(document).ready(function() {
    var $aside, $buttonAside, $leftAsideLinks;
    $buttonAside = $('.wrap-button-aside').children('a');
    $aside = $('.wrap-aside');
    $leftAsideLinks = $('.left-aside li a');
    $leftAsideLinks.on('click', function(e) {
      var $this;
      e.preventDefault();
      $this = $(this);
      $leftAsideLinks.removeClass('active');
      return $this.addClass('active');
    });
    return $buttonAside.on('click', function(e) {
      var $this;
      e.preventDefault();
      $this = $(this);
      if ($this.hasClass('fa-circle-o')) {
        $this.removeClass('fa-circle-o').addClass('fa-remove');
        return $aside.css({
          left: 0
        });
      } else {
        $this.removeClass('fa-remove').addClass('fa-circle-o');
        return $aside.css({
          left: -$aside.width()
        });
      }
    });
  });

}).call(this);

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
