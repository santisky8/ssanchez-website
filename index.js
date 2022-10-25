var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next){
    res.render (
        'index', 
        {
            title: 'Express'
        }
    );
});
// GET About Me page
router.get('/about', function(req, res, next){
    res.render(
        'index',
        {
            title:'About Me'
        }
    );
});
// GET Projects page
router.get('/projects', function(req, res, next){
    res.render(
        'index',
        {
            title:'Projects'
        }
    );
});
// Get Services page
router.get('/services', function(req, res, next){
    res.render(
        'index',
        {
            title:'Services'
        }
    );
});
// Get Contact page
router.get('/Contact', function(req, res, next){
    res.render(
        'index',
        {
            title:'Contact'
        }
    );
});
module.exports = router;