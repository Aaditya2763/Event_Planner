const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    
    eventTitle:{
        type:String,
        trim:true
    },
    eventDate:{
        type: Date,
        default:Date.now,
        trim:true
    },
    eventStartTime:{
        type:String,
        trim:true
    },
    eventEndTime:{
        type:String,
        trim:true
    },
    eventOrganiser:{
      type:String
    },
    eventBackgroundCoverUrl:{
        type:String
    },
    eventDescription:{
     type:String,
     trim:true
    }
},{timestamps:true})


module.exports = mongoose.model("userEvent", reviewSchema);