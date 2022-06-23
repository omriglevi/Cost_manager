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
module.exports=mongoose.model('Cost',CostsSchema)