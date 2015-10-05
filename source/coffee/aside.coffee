'use strict'
$(document).ready ->
  $buttonAside = $('.wrap-button-aside').children('a')
  $aside = $ '.wrap-aside'
  $leftAsideLinks = $ '.left-aside li a'

  $leftAsideLinks.on 'click', (e)->
    e.preventDefault()
    $this = $ this
    $leftAsideLinks.removeClass 'active'
    $this.addClass 'active'
  $buttonAside.on 'click', (e)->
    e.preventDefault()
    $this = $ this
    if $this.hasClass('fa-circle-o')
      $this.removeClass('fa-circle-o').addClass('fa-remove')
      $aside.css left: 0
    else
      $this.removeClass('fa-remove').addClass('fa-circle-o')
      $aside.css left: -$aside.width()
