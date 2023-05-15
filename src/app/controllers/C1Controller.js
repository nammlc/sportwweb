const c1 = require('../models/c1');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        c1.find().lean()
            .then(c1 => res.render('C1',{c1}))
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
    
    edit(req,res,next){
        c1.findById(req.params.id).lean()
            .then(c1 => res.render('admin/editc1',{
                c1: c1,
                layout: 'admin'
            }))
            .catch(next);
    }

    update(req,res,next){
        c1.updateOne({_id: req.params.id},req.body).lean()
            .then(() => res.redirect('/admin/stored-c1'))
            .catch(next);
        }
    
    delete(req,res,next){
        c1.deleteOne( {_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    }

module.exports = new NewsController();