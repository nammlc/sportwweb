const laliga = require('../models/laliga');
const Laliga = require('../models/laliga');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        Laliga.find().lean()
            .then(laliga => res.render('Laliga',{laliga}))
            .catch(next);
    }
    //[GET] /news/:slug

    render(req,res,next){
        Laliga.findOne({slug : req.params.slug}).lean()
            .then(laliga => res.render('course/showlaliga',{laliga}))
            .catch(next)
    }
}
module.exports = new NewsController;