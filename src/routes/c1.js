const express = require('express');
const router = express.Router();

const ChampionLeagueController = require('../app/controllers/C1Controller');

router.get('/ChampionLeague', ChampionLeagueController.show);


router.post('/store',ChampionLeagueController.store);

router.get('/:slug',ChampionLeagueController.render);

module.exports = router;