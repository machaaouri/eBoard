(function(homeController){

  var data = require("../data");

  homeController.init = function(app){
    
    data.getNotesCategories(function(err,results){
        app.get("/",function(req,res){
                res.render("index",{title: "Express + Vash",error:err,categories: results});
            });
        });
  };
})(module.exports);