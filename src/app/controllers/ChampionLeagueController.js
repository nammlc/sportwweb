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

    create(req,res,next){
        res.render('course/create');
     }
 
     //store
     store(req,res,next){
         const C1 = new c1(req.body);
         C1.save()
            .then(() => res.redirect('/c1/Champion-League'))
            .catch(error =>{

            });
      }
    }


module.exports = new NewsController();