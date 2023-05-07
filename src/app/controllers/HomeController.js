const Course = require('../models/Course');

class SiteController {

    //[GET] / 
    index(req,res,next){
        Course.find({}).lean()
            .then(course => {res.render('home',{
                layout : 'main',
                course : course
            })})
            .catch(next);

        }
    }
    
    
module.exports = new SiteController;