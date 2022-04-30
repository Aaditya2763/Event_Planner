

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const mongoose=require('mongoose');
const Event=require('./model/event');
const seedEvents=require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore=require('connect-mongo')
const User=require("./model/user")

const dbUrl = process.env.DB_URL ||'mongodb://localhost:27017/Event-Planner'



mongoose.connect(dbUrl)
.then(()=> console.log("DB Connected"))
.catch((error)=>console.log(error));









app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const secret = process.env.SECRET || 'weneedabettersecret';

const store = MongoStore.create({
    secret: secret,
    mongoUrl: "mongodb://localhost:27017/Event-Planner",
    touchAfter: 24 * 3600
  });
  
  
  const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true,
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
      maxAge:1000 * 60 * 60 * 24 * 7 * 1
    }
  }

  
app.use(session(sessionConfig));
app.use(flash());


// Initialising passport in app
app.use(passport.initialize());
app.use(passport.session());

// setting up local strategy z
passport.use(new LocalStrategy(User.authenticate()));

// add the user into the session
passport.serializeUser(User.serializeUser());
// removes the use from the session
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
 
  next();
});




const productRoutes=require("./routes/productRoutes");
const authRoutes=require('./routes/authRoutes')

app.use(productRoutes);
app.use(authRoutes);  


 seedEvents();



 const port = process.env.PORT || 4000;



app.listen('3000',()=>{
    console.log(`server started at port ${port}`)
})