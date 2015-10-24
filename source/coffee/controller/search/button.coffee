class Button
    constructor: ->
        @element.searchLink.on 'click', @event.openSearch
        @element.searchLinkClose.on 'click', @event.closeSearch
        @element.profileLink.on 'click', @event.toggleProfileMenu
        @element.document.on 'click', 'html', @event.globalCloseProfileMenu
    element:
        searchForm: $ '#search-form'
        searchInput: $ '#search-input'
        searchLink: $ '#search-link'
        searchLinkClose: $ '#search-link-close'
        profileLink: $ '#profile-link'
        document: $ document
    event:
        openSearch: (e)->
            do e.preventDefault
            Button::element.searchForm.show 'blind', direction: 'up', 200
            Button::searchLinkClose.rotate angle: -60, animateTo: 0
            do @element.searchInput.focus
        closeSearch: (e)->
            do e.preventDefault
            Button::searchForm.hide 'blind', direction: 'up', 200
            Button::searchLinkClose.rotate angle: 0, animateTo: -60
        toggleProfileMenu: (e)->
            $this = $ this
            $menu = $this.children '.profile-menu'
            $arrow = $this.find('.fa.fa-angle-down')
            if $menu.is(':visible')
                $arrow.rotate animateTo: 0
            else
                $arrow.rotate animateTo: -180
            $menu.stop false, false
            $menu.toggle "drop", direction: 'up', 200
        globalCloseProfileMenu: (e)->
            unless $(e.target).closest("#profile-link").length
                $profileMenu = $ '.profile-menu'
                $arrow = $profileMenu.parent().find '.fa.fa-angle-down'
                $arrow.rotate animateTo: 0
                $profileMenu.hide 'drop', direction: 'up', 200

module.exports = Button
