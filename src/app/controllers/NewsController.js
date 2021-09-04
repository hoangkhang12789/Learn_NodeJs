

class NewsController{
    // GET [] /news
    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send('trang phụ')
    }
}
 
module.exports =new NewsController