const BlogPost = require('../model/BlogPost');


module.exports = async (req,res) => {
    // console.log(req.params.id);
   //  let post = await BlogPost.find({_id : req.params.id});
     const post1 = await BlogPost.findById(req.params.id);
     console.log(post1);
    
     res.render('post',{
         post: post1
     })
 
 }