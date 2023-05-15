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
 
     //store
     store(req,res,next){
         const euro = new Euro(req.body);
         euro.save()
            .then(() => res.redirect('/euro/Euro'))
            .catch(error =>{

            });
      }
    edit(req,res,next){
        Euro.findById(req.params.id).lean()
            .then(euro => res.render('admin/editeuro',{
                euro: euro,
                layout: 'admin'
            }))
            .catch(next);
    }

    update(req,res,next){
        Euro.updateOne({_id: req.params.id},req.body).lean()
            .then(() => res.redirect('/admin/stored-euro'))
            .catch(next);
        }
    
    delete(req,res,next){
        Euro.deleteOne( {_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new NewsController;