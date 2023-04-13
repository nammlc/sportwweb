const Course = require('../models/Course');

class SiteController {

    //[GET] / 
    index(req,res,next){
        Course.find({}).lean()
            .then(course => res.render('home',{course}))
            .catch(next);

        }
    }
    
module.exports = new SiteController;