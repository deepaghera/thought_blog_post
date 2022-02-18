const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
//                      << controllers >>
const homeController      = require('./controllers/home');
const newPostController   = require('./controllers/newPost');
const storePostController = require('./controllers/storePost');
const getPostController   = require('./controllers/getPost');
//   middleWare 
const validateMiddleWare = require('./middleware/validationMiddleware')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true }))

app.use(fileUpload());
app.set('view engine','ejs');
app.use(express.static('public'))    


mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
//                  <<  all routes  >>

app.use('/posts/store',validateMiddleWare);

app.get('/',homeController)

app.get('/posts/new',newPostController);

app.post('/posts/store',storePostController);

app.get("/post/:id",getPostController);

console.log(__dirname);
app.listen(4000,() => {
    console.log("app is running on 4000");
})