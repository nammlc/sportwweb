const express = require('express');
const router = express.Router();

const EuroController = require('../app/controllers/EuroController');

router.get('/Euro',EuroController.show);

router.post('/store',EuroController.store);

router.get('/edit',EuroController.edit);

router.put('/update',EuroController.update);

router.get('/:slug', EuroController.render);


module.exports = router;