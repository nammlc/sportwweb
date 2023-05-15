const courses = require('../models/Course');
class SiteController {

    //[GET] / 
    show(req,res,next){
        courses.find().lean()
            .then(courses => res.render('home',{courses}))
            .catch(next);
    }
    //[GET] /news/:slug
    render(req,res,next){
        courses.findOne({slug : req.params.slug}).lean()
            .then((courses)=>{
                res.render('course/show',{courses});
            })
            .catch(next);
        }
     //store
    store(req,res,next){
        const ChampionLeague = new courses(req.body);
        ChampionLeague.save()
           .then(() => res.redirect('/'))
           .catch(error =>{

           });
     }
    
    edit(req,res,next){
        courses.findById(req.params.id).lean()
            .then(courses => res.render('admin/editmain',{
                courses: courses,
                layout: 'admin'
            }))
            .catch(next);
    }

    update(req,res,next){
        courses.updateOne({_id: req.params.id},req.body).lean()
            .then(() => res.redirect('/admin/stored-main'))
            .catch(next);
        }
    
    delete(req,res,next){
        courses.deleteOne( {_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    }


    
    
module.exports = new SiteController();