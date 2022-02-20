const User = require('../model/User');
 
module.exports = async (req,res) => {
    console.log(req.body);
    await User.create(req.body,(error,user) => {
        if(error) {
            return res.redirect('/auth/register');
        }
            res.redirect('/');
        
       
    })
 
}