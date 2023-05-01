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
    edit(req,res,next){
        Laliga.findById(req.params.id).lean()
            .then(laliga => res.render('course/update',{laliga}))
            .catch(next);
    }

    update(req,res,next){
        Laliga.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/admin/Stored-db'))
            .catch(next);
        }
    }

module.exports = new NewsController;