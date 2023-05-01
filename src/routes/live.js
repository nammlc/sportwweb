const express = require('express');
const router = express.Router();

const LiveController = require('../app/controllers/LiveController');

router.get('/:slug', LiveController.show);

module.exports = router;