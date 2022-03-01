const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const ejs = require('ejs');
//                      << controllers >>
const homeController        = require('./controllers/home');
const newPostController     = require('./controllers/newPost');
const storePostController   = require('./controllers/storePost');
const getPostController     = require('./controllers/getPost');
const newRegisterController = require('./controllers/register');
const storeUserController   = require('./controllers/storeUser');
const loginController       = require('./controllers/login');
const loginUserController   = require('./controllers/loginUser');
const logoutConroller       = require('./controllers/logout');
//                         <<middleWare >> 
const validateMiddleWare = require('./middleware/validationMiddleware');
const authMiddleWare = require('./middleware/authMiddleWare');
const redirectIfAuthenticatedMiddleWare = require('./middleware/ redirectIfAuthenticatedMiddleware');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true }))
app.use(expressSession({
    secret : 'keyboard car'
}))
app.use(fileUpload());
app.set('view engine','ejs');
app.use(express.static('public'))    


mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

global.loggedIn = null;
app.use("*",(req,res,next) => {
    loggedIn = req.session.userId;
    next();
})


//                  <<  all routes  >>

app.use('/posts/store',validateMiddleWare);

app.get('/',homeController)

app.get('/posts/new',authMiddleWare,newPostController);

app.post('/posts/store',authMiddleWare,storePostController);

app.get("/post/:id",getPostController);

app.get('/auth/register',redirectIfAuthenticatedMiddleWare,newRegisterController);

app.post('/users/register',redirectIfAuthenticatedMiddleWare,storeUserController);

app.get('/auth/login',redirectIfAuthenticatedMiddleWare,loginController);

app.post('/users/login',redirectIfAuthenticatedMiddleWare,loginUserController);

app.get('/logout',logoutConroller);

app.use((req,res) => res.render('notfound'));

console.log(__dirname);
app.listen(4000,() => {
    console.log("app is running on 4000");
})