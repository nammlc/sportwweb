const c1 = require('../models/c1');
class NewsController{

    show(req,res,next){
        res.render('./login/login',{
            layout : 'login',
        })
    }

}

module.exports = new NewsController();
