const express = require('express');
const router = express.Router();

const worldController = require('../app/controllers/WorldController');

// router.get('/create', worldController.create);
// router.post('/store', worldController.store);
// router.get('/:id/edit', worldController.edit);
// router.put('/:id', worldController.update);
// router.delete('/:id', worldController.delete);
router.get('/:slug', worldController.show);

module.exports = router;