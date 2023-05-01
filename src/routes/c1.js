const express = require('express');
const router = express.Router();

const C1Controller = require('../app/controllers/C1Controller');

router.get('/Champion-League', C1Controller.show);

router.post('/store',C1Controller.store);

router.get('/:id/edit',C1Controller.edit);

router.put('/:id',C1Controller.update);

router.get('/:slug',C1Controller.render);

module.exports = router;