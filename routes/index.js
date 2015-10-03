var express = require('express');
var router = express.Router();
var nconf = require('nconf');
var includeFiles = nconf.argv().env().file({
    file: './configs/includeFiles.json'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      includeJs: includeFiles.get('js'),
      includeCss: includeFiles.get('css'),
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
