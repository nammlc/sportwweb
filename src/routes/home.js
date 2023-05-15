const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');

router.get('/',HomeController.show);

router.post('/home/store',HomeController.store);

router.get('/home/:id/edit',HomeController.edit);

router.put('/home/:id',HomeController.update);

router.delete('/home/:id',HomeController.delete);

router.get('/home/:slug', HomeController.render);


module.exports = router;