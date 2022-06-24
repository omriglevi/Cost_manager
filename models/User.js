const mongoose=require('mongoose');
const CostSchema = require('./Cost').schema;
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
    expensesList:{
        type:[CostSchema]
    }
}, {
    timestamps:true
});
module.exports=mongoose.model('User',UserSchema)