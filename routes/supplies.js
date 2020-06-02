var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');

router.get('/', suppliesCtrl.index);
router.get('/new', suppliesCtrl.addSupply);
router.get('/:id', suppliesCtrl.show);
router.post('/', suppliesCtrl.create);
router.delete('/:id', suppliesCtrl.delete);
router.get('/:id/edit', suppliesCtrl.edit);
router.put('/:id', suppliesCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;