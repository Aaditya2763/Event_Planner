const mongoose=require('mongoose');

const eventSchema=new mongoose.Schema({

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
    eventOrganiser:
        {
            type:String,
            trim:true
            },
    eventBackgroundCoverUrl:{
        type:String
    },
    eventType:{
        type:String
    },
    eventDescription:{
     type:String,
     trim:true
    }
},{timestamps:true})


const event=mongoose.model('event',eventSchema);

module.exports=event;