const c1= require('../models/c1');
const euro = require('../models/euro');
const epl = require('../models/epl');
const laliga = require('../models/laliga');



class NewsController {
    
    create(req,res,next){
        res.render('course/create');
     }

    show(req,res,next){
        c1.find().lean()
            .then(c1 => res.render('admin/stored-db',{c1}))
            .catch(next);
    }

}


module.exports = new NewsController();