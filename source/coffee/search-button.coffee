'use strict'
$(document).ready ->
  $searchForm = $ '#search-form'
  $searchInput = $ '#search-input'

  $searchLink = $ '#search-link'
  $searchLinkClose = $ '#search-link-close'
  $searchLink.on 'click', (e)->
    do e.preventDefault
    $searchForm.css {'bottom': 0}
    do $searchInput.focus
    return
  $searchLinkClose.on 'click', (e)->
    do e.preventDefault
    $searchForm.css {'bottom': '100%'}
    return
  return
