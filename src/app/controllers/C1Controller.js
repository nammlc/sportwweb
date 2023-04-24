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
     //store
     store(req,res,next){
        const ChampionLeague = new c1(req.body);
        ChampionLeague.save()
           .then(() => res.redirect('/c1/Champion-League'))
           .catch(error =>{

           });
     }
    
    // edit(req,res,next){
    //     c1.findById(req.params.id).lean()
    //         .then(c1 => res.render('course/update',{c1}))
    //         .catch(next);
    // }

    // update(req,res,next){
    //     c1.updateOne({_id: req.params.id},req.body)
    //         .then(() => res.redirect('/admin/Stored-db'))
    //         .catch(next);
    //     }

    // }

    }
module.exports = new NewsController();