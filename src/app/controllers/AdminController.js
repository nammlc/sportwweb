const c1= require('../models/c1');
const euro = require('../models/euro');
const epl = require('../models/epl');
const laliga = require('../models/laliga');
const course = require('../models/Course');


class NewsController {
    
    create(req,res,next){
        res.render('admin/create-news',{layout : 'admin'});
     }
    
    showmain(req,res,next){
        course.find().lean()
            .then(course => {
                res.render('admin/storemain',{
                    layout : 'admin',
                    course : course
                })
            })
            .catch(next);
    }
    
    showc1(req,res,next){
        c1.find().lean()
            .then(c1 =>{ res.render('admin/storec1',{
                c1 : c1,
                layout : 'admin'
            })})
            .catch(next);
    }

    showeuro(req,res,next){
        euro.find().lean()
            .then(euro =>{ res.render('admin/storeeuro',{
                euro : euro,
                layout : 'admin'
            })})
            .catch(next);
    }

    showepl(req,res,next){
        epl.find().lean()
            .then(epl =>{ res.render('admin/storeepl',{
                epl : epl,
                layout : 'admin'
            })})
            .catch(next);
    }

    showlaliga(req,res,next){
        laliga.find().lean()
            .then(laliga =>{ res.render('admin/storelaliga',{
                laliga : laliga,
                layout : 'admin'
            })})
            .catch(next);
    }

}

module.exports = new NewsController();