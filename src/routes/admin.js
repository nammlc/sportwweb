const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/create',AdminController.create);

module.exports = router;