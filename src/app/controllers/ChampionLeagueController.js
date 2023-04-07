const Worldsoccer = require('../models/World');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        Worldsoccer.find().lean()
            .then(worldsoccer => res.render('ChampionLeague',{worldsoccer}))
            .catch(next);
    }
    //[GET] /news/:slug
}

module.exports = new NewsController;