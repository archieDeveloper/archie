/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ControllerSearchButton;

	ControllerSearchButton = __webpack_require__(1);

	new ControllerSearchButton;


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Button;

	Button = (function() {
	  function Button() {
	    this.element.searchLink.on('click', this.event.openSearch);
	    this.element.searchLinkClose.on('click', this.event.closeSearch);
	    this.element.profileLink.on('click', this.event.toggleProfileMenu);
	    this.element.document.on('click', 'html', this.event.globalCloseProfileMenu);
	  }

	  Button.prototype.element = {
	    searchForm: $('#search-form'),
	    searchInput: $('#search-input'),
	    searchLink: $('#search-link'),
	    searchLinkClose: $('#search-link-close'),
	    profileLink: $('#profile-link'),
	    document: $(document)
	  };

	  Button.prototype.event = {
	    openSearch: function(e) {
	      e.preventDefault();
	      Button.prototype.element.searchForm.show('blind', {
	        direction: 'up'
	      }, 200);
	      Button.prototype.searchLinkClose.rotate({
	        angle: -60,
	        animateTo: 0
	      });
	      return this.element.searchInput.focus();
	    },
	    closeSearch: function(e) {
	      e.preventDefault();
	      Button.prototype.searchForm.hide('blind', {
	        direction: 'up'
	      }, 200);
	      return Button.prototype.searchLinkClose.rotate({
	        angle: 0,
	        animateTo: -60
	      });
	    },
	    toggleProfileMenu: function(e) {
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
	    },
	    globalCloseProfileMenu: function(e) {
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
	    }
	  };

	  return Button;

	})();

	module.exports = Button;


/***/ }
/******/ ]);