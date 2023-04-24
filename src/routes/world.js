const express = require('express');
const router = express.Router();

const worldController = require('../app/controllers/WorldController');

router.get('/:slug', worldController.show);

module.exports = router;