const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/HomeController');

// router.get('/',siteController.show);
router.get('/',siteController.index);



module.exports = router;