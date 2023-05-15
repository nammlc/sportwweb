const express = require('express');
const router = express.Router();

const EuroController = require('../app/controllers/EuroController');

router.get('/Euro',EuroController.show);

router.post('/store',EuroController.store);

router.get('/:id/edit',EuroController.edit);

router.put('/:id',EuroController.update);

router.delete('/:id',EuroController.delete);

router.get('/:slug', EuroController.render);


module.exports = router;