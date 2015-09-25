var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Archie',
      breadCrumbs: [
          'Программирование',
          'PHP',
          'Паттерны проектирования'
      ]
  });
});

module.exports = router;
