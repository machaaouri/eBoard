(function(homeController){

  var data = require("../data");

  homeController.init = function(app){
    
        app.get("/",function(req,res){
            
          data.getNotesCategories(function(err,results){
                res.render("index",{
                  title: "Express + Vash",
                  error:err,
                  categories: results,
                  newCatError: req.flash("newCatName")
              });
            });
        });

        app.post("/newCategory", function (req, res) {
            var categoryName = req.body.categoryName;

            data.createNewCategory(categoryName, function (err) {
                if (err) {
                    //Handle Error
                    console.log(err);
                    req.flash("newCatName", err); /* give the name of some temporary message 
                    homeController gets called here with newCategory from that from , 
                    if the category already exists , it returns Category already exists as an error
                    back in the homeController , this error is going to be valid and so we end up shoving it into
                    flash and telling the browser to redirect to the home page , then we'll end up calling
                    app.get("/") and we're going to pull out what we shoved in flash a minute ago
                    and pass it to the view as a part of the newCategory error and it will get rendred in the view.
                   */
                    res.redirect("/");
                } else {
                    res.redirect("/notes/" + categoryName);
                }
            });
        });
  };
})(module.exports);