const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');                                            


const userSchema=new mongoose.Schema({
  email:String,

    phoneNo:{
        type:Number,
        min:10,
        max:10,
        trim:true
    },


   
})

userSchema.plugin(passportLocalMongoose);



module.exports=mongoose.model('User',userSchema)

