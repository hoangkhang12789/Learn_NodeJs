

class SiteController{
    // GET []  Site
    home(req, res){
        res.render( 'home');
    }
    
}
 
module.exports =new SiteController