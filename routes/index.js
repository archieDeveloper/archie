var express = require('express');
var router = express.Router();
var nconf = require('nconf');
var config = nconf.argv().env().file({
    file: './configs/config.json'
});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/archie');


/* GET home page. */
router.get('/', function(req, res, next) {
    var Cat = mongoose.model('Cat', {name: String});

    var kitty = new Cat({name: 'archie'});
    kitty.save(function(err){
        if (err) {

        }
        console.log('meow');
    });
  res.render('index', {
      includeJs: config.get('include:js'),
      includeCss: config.get('include:css'),
      title: 'Archie',
      breadCrumbs: [
          'Программирование',
          'PHP',
          'Паттерны проектирования'
      ],
      authorized: true
  });
});

module.exports = router;
