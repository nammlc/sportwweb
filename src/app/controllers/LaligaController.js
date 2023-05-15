const laliga = require('../models/laliga');
class NewsController {
    
    //[GET] / 
    show(req,res,next){
        laliga.find().lean()
            .then(laliga => res.render('laliga',{laliga}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        laliga.findOne({slug : req.params.slug}).lean()
            .then((laliga)=>{
                res.render('course/showlaliga',{laliga});
            })
            .catch(next);
        }
     //store
    store(req,res,next){
        const ChampionLeague = new laliga(req.body);
        ChampionLeague.save()
           .then(() => res.redirect('/laliga/Laliga'))
           .catch(error =>{

           });
     }
    
    edit(req,res,next){
        laliga.findById(req.params.id).lean()
            .then(laliga => res.render('admin/editlaliga',{
                laliga: laliga,
                layout: 'admin'
            }))
            .catch(next);
    }

    update(req,res,next){
        laliga.updateOne({_id: req.params.id},req.body).lean()
            .then(() => res.redirect('/admin/stored-laliga'))
            .catch(next);
        }
    
    delete(req,res,next){
        laliga.deleteOne( {_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    }

module.exports = new NewsController();