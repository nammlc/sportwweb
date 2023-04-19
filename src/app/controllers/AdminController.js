const c1 = require('../models/c1');
class NewsController {
    
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
    
    //update
    show(req,res,next){
        c1.find().lean()
            .then(c1 => res.render('admin/stored-db',{c1}))
            .catch(next);
        }

    delete(req,res,next){
        c1.find().lean()
        .then(c1 => res.render('admin/stored-db',{c1}))
        .catch(next);
    }
    }


module.exports = new NewsController();