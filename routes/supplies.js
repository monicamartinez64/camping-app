var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');

router.post('/', isLoggedIn, suppliesCtrl.create);
router.get('/', isLoggedIn ,suppliesCtrl.getSupplies);
router.get('/', isLoggedIn, suppliesCtrl.index);
router.get('/:id/supplydetails', isLoggedIn, suppliesCtrl.edit);
router.put('/:id', isLoggedIn, suppliesCtrl.update);
// router.delete('/:id', isLoggedIn, suppliesCtrl.delete);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;