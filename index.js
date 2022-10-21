var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render ('index', {title: 'Express'});
});

router.get('/about', function(req, res, next){
    res.render(
        'index',
        {
            title:'About me'
        }
    );
});
module.exports = router;