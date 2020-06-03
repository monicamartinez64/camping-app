var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');
const campsiteCtrl = require('../controllers/campsites');

router.get('/query', isLoggedIn, campsiteCtrl.query)
router.post('/query', isLoggedIn, campsiteCtrl.search)
router.get('/:parkCode/query', isLoggedIn, campsiteCtrl.showPark)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
