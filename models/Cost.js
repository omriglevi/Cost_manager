const mongoose = require('mongoose')
const CostsSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    spent_by:{
        type:mongoose.Types.ObjectId
    }
    
}, {
    timestamps:true
});
module.exports={
    model:mongoose.model('Cost',CostsSchema) ,
    schema:CostsSchema

}