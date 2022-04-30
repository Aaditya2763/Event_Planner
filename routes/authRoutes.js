const express=require('express');
const router=express.Router();
const User=require('../model/user');
const passport=require('passport');




router.get('/auth/register',(req,res)=>{
res.render('auth/signup');
})


router.post('/auth/register',async(req,res)=>{
    try {
        const{email,username,password} = req.body;

        const user = new User({ email, username });
    
        await User.register(user, password);
    
        req.flash('success', 'Signed up successfully!');
        res.redirect('/auth/login');
    }
    catch (e) {
        req.flash('error', e.message);
        console.log(e)
        res.redirect('/auth/register');
    }
})



router.post('/auth/login', 
    passport.authenticate('local',
        {
            failureRedirect: '/auth/login',
            failureFlash: true
        }),
    (req, res) => {
        req.flash('success','Welcome back again!');
        res.redirect('/events');
    });


router.get('/auth/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Good Bye!!');
    res.redirect('/');
})



router.get('/auth/login',(req,res)=>{
    res.render('auth/login')
})


 




module.exports=router