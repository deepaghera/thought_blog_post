const User = require('../model/User');
 
module.exports = async (req,res) => {
    console.log(req.body);
    await User.create(req.body,(error,user) => {
        if(error) {
           // console.log("errors is here ===>",error.errors);
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
            req.session.validationErrors = validationErrors
            console.log(error);
            return res.redirect('/auth/register');
        }
            res.redirect('/');
        
       
    })
 
}