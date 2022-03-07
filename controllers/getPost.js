const BlogPost = require('../model/BlogPost');


module.exports = async (req,res) => {
   
     const post1 = await BlogPost.findById(req.params.id).populate('userid');
     res.render('post',{
         post: post1
     })
 
 }