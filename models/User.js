const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    personal_id:{
        type:String,
        required:true
    },
    totalExpenses:{
        type:Number,
        required:true
    },
}, {
    timestamps:true
});
module.exports=mongoose.model('User',UserSchema)