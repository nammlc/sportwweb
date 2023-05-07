const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/create',AdminController.create);

router.get('/stored-c1',AdminController.showc1);

router.get('/stored-euro',AdminController.showeuro);

router.get('/stored-epl',AdminController.showepl);

router.get('/stored-laliga',AdminController.showlaliga);

router.get('/stored-main',AdminController.showmain);





module.exports = router;