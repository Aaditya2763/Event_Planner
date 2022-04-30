const {eventSchema} = require('../schema');



module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to login first!');
        return res.redirect('/auth/login');
    }
    next();
}


module.exports.validateProduct = (req, res, next) => {
  
    const {  eventType, eventTitle, eventDescription,organiserName, } = req.body;
    const { error } =eventSchema.validate({  eventType, eventTitle, eventDescription,organiserName, });
   
    if (error) {
        const err = error.details.map((e) => e.message);
        const msg = err.join(',');
        req.flash('error', msg);
        return res.redirect('/error');
    }
    next();
}










