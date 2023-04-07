const Worldsoccer = require('../models/World');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        Worldsoccer.find().lean()
            .then(worldsoccer => res.render('Euro',{worldsoccer}))
            .catch(next);
    }
    //[GET] /news/:slug
}

module.exports = new NewsController;