const c1 = require('../models/c1');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        c1.find().lean()
            .then(c1 => res.render('ChampionLeague',{c1}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        c1.findOne({slug : req.params.slug}).lean()
            .then((c1)=>{
                res.render('course/worldshow',{c1});
            })
            .catch(next);
    }
}

module.exports = new NewsController;