const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

// router.get('/create', AdminController.create);
// router.post('/store', AdminController.store);
// router.get('/:id/edit', AdminController.edit);
// router.put('/:id', AdminController.update);
// router.delete('/:id', AdminController.delete);



router.get('/stored-db',AdminController.show);

router.get('/delete',AdminController.delete);

module.exports = router;