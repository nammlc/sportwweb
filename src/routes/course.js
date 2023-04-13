const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

const c1Controller = require('../app/controllers/ChampionLeagueController');
// router.get('/create', courseController.create);
// router.post('/store', courseController.store);
// router.get('/:id/edit', courseController.edit);
// router.put('/:id', courseController.update);
// router.delete('/:id', courseController.delete);

router.get('/:slug', c1Controller.render);




module.exports = router;