var express = require('express');
var router = express.Router();
var suppliesCtrl = require('../controllers/supplies');

router.get('/', suppliesCtrl.index);
router.get('/new', suppliesCtrl.new);
router.get('/:id', suppliesCtrl.show);
router.post('/', suppliesCtrl.create);
router.delete('/:id', suppliesCtrl.delete);
router.get('/:id/edit', suppliesCtrl.edit);
router.put('/:id', suppliesCtrl.update);

module.exports = router;
