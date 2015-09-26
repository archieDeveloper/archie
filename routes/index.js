var express = require('express');
var router = express.Router();
var include = require('../configs/include');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      includeJs: include.js,
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
