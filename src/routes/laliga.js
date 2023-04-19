const express = require('express');
const router = express.Router();

const LaligaController = require('../app/controllers/LaligaController');

// router.get('/create', ChampionLeagueController.create);
// router.post('/store', ChampionLeagueController.store);
// router.get('/:id/edit', ChampionLeagueController.edit);
// router.put('/:id', ChampionLeagueController.update);
// router.delete('/:id', ChampionLeagueController.delete);

router.get('/Laliga',LaligaController.show);

router.get('/create',LaligaController.create);

router.post('/store',LaligaController.store);

router.get('/:slug', LaligaController.render);


module.exports = router;