const BlogPost = require('../model/BlogPost');
const path = require('path');

module.exports = async (req,res) => {
    //console.log("req.body =>>>",req.body);
    let image =  req.files.image;
    console.log(image)
   // console.log("req.file>>",req.files)
   console.log()
    image.mv(path.resolve(__dirname,'../public/img',image.name),
    async (error) => {
        console.log("img erro",error);
        await BlogPost.create({
            ...req.body,
            image : '/img/' + image.name,
            userid : req.session.userId
        })
        res.redirect('/')
    })
 }