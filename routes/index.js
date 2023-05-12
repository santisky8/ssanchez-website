var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Home', 
      name: 'Santiago' 
    }
  );
});

router.get('/projects', function(req, res, next) {
  res.render(
    'projects', 
    { 
      title: 'Projects',
    }
  );
});

router.get('/assignment1', function(req, res, next) {
  res.render(
    'assignment1', 
    { 
      title: 'Assignment 1',
    }
  );
});

router.get('/assignment2', function(req, res, next) {
  res.render(
    'assignment2', 
    { 
      title: 'Assignment 2',
    }
  );
});

router.get('/assignment3', function(req, res, next) {
  res.render(
    'assignment3', 
    { 
      title: 'Assignment 3',
    }
  );
});

router.get('/services', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Services',
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'About Me',
      name: 'Julio' 
    }
  );
});

router.get('/contact', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Contact',
      name: 'Santiago' 
    }
  );
});

module.exports = router;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))