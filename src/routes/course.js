const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

const c1Controller = require('../app/controllers/C1Controller');

router.get('/:slug', courseController.show);

module.exports = router;