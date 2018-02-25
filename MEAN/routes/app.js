var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
        // res.render('node', {email: doc});
    res.render('index');
});


// router.post('/', function(req, res, next){
// var email = req.body.email;
// var user = new User(
//     {
//         firstName: 'Stephen',
//         lastName: 'Jeon',
//         password: 'super secret',
//         email: email
//     }
// );
// user.save();//save data to mongo
//
// res.redirect('/');
// });

module.exports = router;
