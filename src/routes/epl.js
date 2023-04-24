const express = require('express');
const router = express.Router();

const EplController = require('../app/controllers/EplController');

router.get('/Epl', EplController.show);

router.post('/store',EplController.store);

router.get('/:slug',EplController.render);

module.exports = router;