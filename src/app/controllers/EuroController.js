const Euro = require('../models/euro');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        Euro.find().lean()
            .then(euro => res.render('Euro',{euro}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        Euro.findOne({slug : req.params.slug}).lean()
            .then(euro => res.render('course/showeuro',{euro}))
            .catch(next);
    }
}

module.exports = new NewsController;