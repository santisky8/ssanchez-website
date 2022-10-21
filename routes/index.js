var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Santiago' });
});

router.get('/about', function(req, res, next) {
  res.render(
    'index', 
  { 
    title: 'About me', 
    name: 'Santiago'
  });
});

module.exports = router;
