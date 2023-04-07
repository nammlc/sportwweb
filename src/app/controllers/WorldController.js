const Worldsoccer = require('../models/World');

class WorldController {
    //[GET] /Worlds/:slug
    show(req,res,next){
        Worldsoccer.findOne({slug : req.params.slug }).lean()
            .then((worldsoccer) =>{
                res.render('course/worldshow',{worldsoccer});
            })
            .catch(next);
    }

}

   

module.exports = new WorldController;