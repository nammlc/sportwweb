const Epl = require('../models/epl');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        Epl.find().lean()
            .then(epl => res.render('Epl',{epl}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        Epl.findOne({slug : req.params.slug}).lean()
            .then(epl => res.render('course/showepl',{epl}))
            .catch(next)
    }
    
     //store
     store(req,res,next){
         const epl = new Epl(req.body);
         epl.save()
            .then(() => res.redirect('/epl/Epl'))
            .catch(error =>{

            });
      }
    }


module.exports = new NewsController;