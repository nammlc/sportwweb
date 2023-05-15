const epl = require('../models/epl');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        epl.find().lean()
            .then(epl => res.render('Epl',{epl}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        epl.findOne({slug : req.params.slug}).lean()
            .then((epl)=>{
                res.render('course/showepl',{epl});
            })
            .catch(next);
        }
     //store
    store(req,res,next){
        const ChampionLeague = new epl(req.body);
        ChampionLeague.save()
           .then(() => res.redirect('/epl/Epl'))
           .catch(error =>{

           });
     }
    
    edit(req,res,next){
        epl.findById(req.params.id).lean()
            .then(epl => res.render('admin/editepl',{
                epl: epl,
                layout: 'admin'
            }))
            .catch(next);
    }

    update(req,res,next){
        epl.updateOne({_id: req.params.id},req.body).lean()
            .then(() => res.redirect('/admin/stored-epl'))
            .catch(next);
        }
    
    delete(req,res,next){
        epl.deleteOne( {_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    }

module.exports = new NewsController();