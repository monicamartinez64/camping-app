var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');

router.post('/', isLoggedIn, suppliesCtrl.create);
router.get('/', isLoggedIn ,suppliesCtrl.getSupplies);
router.get('/', isLoggedIn, suppliesCtrl.index);
router.get('/:id/supplydetails', isLoggedIn, suppliesCtrl.edit);
router.delete('/:id', isLoggedIn, suppliesCtrl.delete);
router.put('/:id', isLoggedIn, suppliesCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;