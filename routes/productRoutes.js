const express=require('express');
const Events=require('../model/event')
const router=express.Router();
const{isLoggedIn,validateProduct}=require('../middleware/middleware')



router.get('/',(req,res)=>{
    res.render('home')
})  




router.get("/events",isLoggedIn,async(req,res)=>{
    try{
        const events= await Events.find({});
    console.log(events);
    
    res.render('products/events',{events});
    }
    catch(e){
        console.log(e);
    }
})





router.post('/events',isLoggedIn,async(req,res)=>{
    try{
    const {eventTitle,
        eventDate,
        eventType,
        eventStartTime,
      
        eventEndTime,
        eventOrganiser,
        eventDescription } = req.body;

    await Events.create({eventTitle,
        eventDate,
        eventType,
        eventStartTime,
        eventEndTime,
         eventDescription,
        eventOrganiser,
        });

    req.flash('success', 'Product created successfully!');
    res.redirect('/events');
    
}
catch(e) {
    
    req.flash('error', e.message);
    res.redirect('/error');
}
      
})



router.get('/event/:id',isLoggedIn,async(req,res)=>{
const {id}=req.params;
const event=await Events.findById(id);
console.log(event);
res.render('products/showEvent',{event})

})





 router.post('/event/:id',isLoggedIn,validateProduct, async(req,res)=>{
    try {
        const { id } = req.params;
        const { eventTitle,
            eventDate,
            eventType,
            eventStartTime,
            eventEndTime,
             eventDescription,
            organiserName, } = req.body;
        await Events.findByIdAndUpdate(id, {eventTitle,
            eventDate,
            eventType,
            eventStartTime,
            eventEndTime,
             eventDescription,
            organiserName, });
        req.flash('success', 'Updated the product successfully!');
        res.redirect('/events');
    }
    catch (e) {
        console.log(e);
        req.flash('error', e.message);
        res.redirect('/error');
    }
 })


 router.patch('/event/:id',isLoggedIn ,validateProduct,async(req,res)=>{
    try {
        const { id } = req.params;
        const { eventTitle,
            eventDate,
            eventType,
            eventStartTime,
            eventEndTime,
             eventDescription,
            organiserName, } = req.body;
        await Events.findByIdAndUpdate(id, {eventTitle,
            eventDate,
            eventType,
            eventStartTime,
            eventEndTime,
             eventDescription,
            organiserName, });
        req.flash('success', 'Updated the product successfully!');
        res.redirect('/events');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/error');
    }
 })




router.get('/event/:id/edit',isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    const parEvent=await Events.findById(id);
    
    res.render('products/updateEvent',{parEvent})
    
    })


    router.get('/event/:id/delete',isLoggedIn,async(req,res)=>{
        const {id}=req.params;
      await Events.findByIdAndDelete(id);
        
        res.redirect('/events')
        
        })
    





router.get('/events/new',isLoggedIn,(req,res)=>{
    res.render('products/eventForm')
})

module.exports=router;