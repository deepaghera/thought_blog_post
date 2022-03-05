const User = require('../model/User');
 
module.exports = async (req,res) => {
    console.log(req.body);
    await User.create(req.body,(error,user) => {
        if(error) {
           // console.log("errors is here ===>",error.errors);
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            //req.flash('validationErrors',validationErrors);   
            console.log(validationErrors);  
            req.flash('validationErrors', validationErrors);
            req.flash('data',req.body)
            return res.redirect('/auth/register');
        }
            res.redirect('/');
        
       
    })
 
}