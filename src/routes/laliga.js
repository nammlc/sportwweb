const express = require('express');
const router = express.Router();

const LaligaController = require('../app/controllers/LaligaController');

router.get('/Laliga',LaligaController.show);

router.post('/store',LaligaController.store);

router.get('/:id/edit',LaligaController.edit);

router.put('/:id',LaligaController.update);

router.delete('/:id',LaligaController.delete);

router.get('/:slug', LaligaController.render);

module.exports = router;