const express = require('express');
const router = express.Router();

const LaligaController = require('../app/controllers/LaligaController');

router.get('/Laliga',LaligaController.show);

router.post('/store',LaligaController.store);

router.get('/edit',LaligaController.edit);

router.put('/update',LaligaController.update);

router.get('/:slug', LaligaController.render);


module.exports = router;