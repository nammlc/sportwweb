const Course = require('../models/Course');
const { index } = require('./ChampionLeagueController');

const Worldsoccer = require('../models/World');

class SiteController {

    //[GET] / 
    index(req,res,next){
        Course.find({}).lean()
            .then(course => res.render('home',{course}))
            .catch(next);

        }
    }
    
module.exports = new SiteController;