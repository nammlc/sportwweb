const express = require('express');
const router = express.Router();

const ChampionLeagueController = require('../app/controllers/ChampionLeagueController');

// router.get('/create', ChampionLeagueController.create);
// router.post('/store', ChampionLeagueController.store);
// router.get('/:id/edit', ChampionLeagueController.edit);
// router.put('/:id', ChampionLeagueController.update);
// router.delete('/:id', ChampionLeagueController.delete);
router.get('/Champion-League',ChampionLeagueController.show);

router.get('/:slug', ChampionLeagueController.render);


module.exports = router;