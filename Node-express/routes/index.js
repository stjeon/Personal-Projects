var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET accounts page. */
router.get('/accounts', function(req, res, next) {
    res.render('accounts');
});

module.exports = router;
