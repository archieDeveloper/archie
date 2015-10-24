'use strict'
$(document).ready ->
    $searchForm = $ '#search-form'
    $searchInput = $ '#search-input'
    $searchLink = $ '#search-link'
    $searchLinkClose = $ '#search-link-close'
    $profileLink = $ '#profile-link'
    $document = $ document
    $searchLink.on 'click', (e)->
        do e.preventDefault
        $searchForm.show 'blind', direction: 'up', 200
        $searchLinkClose.rotate angle: -60, animateTo: 0
        do $searchInput.focus
    $searchLinkClose.on 'click', (e)->
        do e.preventDefault
        $searchForm.hide 'blind', direction: 'up', 200
        $searchLinkClose.rotate angle: 0, animateTo: -60
    $profileLink.on 'click', ->
        $this = $ this
        $menu = $this.children '.profile-menu'
        $arrow = $this.find('.fa.fa-angle-down')
        if $menu.is(':visible')
            $arrow.rotate animateTo: 0
        else
            $arrow.rotate animateTo: -180
        $menu.stop false, false
        $menu.toggle "drop", direction: 'up', 200
    $document.on 'click', 'html', (e)->
        unless $(e.target).closest("#profile-link").length
            $profileMenu = $ '.profile-menu'
            $arrow = $profileMenu.parent().find '.fa.fa-angle-down'
            $arrow.rotate animateTo: 0
            $profileMenu.hide 'drop', direction: 'up', 200
