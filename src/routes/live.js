const express = require('express');
const router = express.Router();

const LiveController = require('../app/controllers/LiveController');

// router.get('/create', LiveController.create);
// router.post('/store', LiveController.store);
// router.get('/:id/edit', LiveController.edit);
// router.put('/:id', LiveController.update);
// router.delete('/:id', LiveController.delete);
router.get('/:slug', LiveController.show);

module.exports = router;