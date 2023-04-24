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
 
     //store
     store(req,res,next){
         const laliga = new Laliga(req.body);
         laliga.save()
            .then(() => res.redirect('/laliga/Laliga'))
            .catch(error =>{

            });
      }
    }

module.exports = new NewsController;