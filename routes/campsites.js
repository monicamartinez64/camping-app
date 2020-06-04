var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');
const campsiteCtrl = require('../controllers/campsites');


router.get('/query', isLoggedIn, campsiteCtrl.query);
router.post('/query', isLoggedIn, campsiteCtrl.search);
router.get('/:parkCode/query', isLoggedIn, campsiteCtrl.show);
router.post('/', isLoggedIn, campsiteCtrl.create);
router.get('/', isLoggedIn, campsiteCtrl.getParks);
router.delete('/:id', isLoggedIn, campsiteCtrl.delete);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
