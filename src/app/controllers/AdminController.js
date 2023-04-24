class NewsController {
    
    create(req,res,next){
        res.render('course/create');
     }

}


module.exports = new NewsController();