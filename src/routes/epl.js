const express = require('express');
const router = express.Router();

const EplController = require('../app/controllers/EplController');

router.get('/Epl', EplController.show);

router.post('/store',EplController.store);

router.get('/:id/edit',EplController.edit);

router.put('/:id',EplController.update);

router.delete('/:id',EplController.delete);


router.get('/:slug',EplController.render);

module.exports = router;