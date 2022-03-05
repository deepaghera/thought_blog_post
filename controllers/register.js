//const flash = require("connect-flash/lib/flash");

module.exports = (req,res) => {
    var username  = "";
    var password = "" ;
    const data = req.flash('data')[0];
    console.log(req.flash('data')[0]);
    if(typeof data != "undefined") {
        username = data.username;
        password = data.password;
    }
   // console.log("check error",req.flash('validationErrors'))
    res.render('register',{
        errors :  req.flash('validationErrors'),
        username : username,
        password : password
      
    });
}