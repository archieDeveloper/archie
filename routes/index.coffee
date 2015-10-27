express = require 'express'
router = do express.Router
nconf = require 'nconf'
config = nconf.argv().env().file file: './config.json'
ModelMenu = require '../models/menu'

# GET home page.
router.get '/', (req, res, next)->
  ModelMenu.find {name: 'archie2'}, (err, menus)->
    if (err) then return console.error(err)
    console.log(menus)
  res.render 'index',
    includeJs: config.get 'include:js'
    includeCss: config.get 'include:css'
    title: 'Archie'
    breadCrumbs: [
      'Программирование'
      'PHP'
      'Паттерны проектирования'
    ],
    authorized: true

module.exports = router
