const Cost = require("../models/Cost").model;


module.exports={
    createCost : async(cost)=>{
        try {
            const costCreated = await new Cost(cost).save()
           return  costCreated;
       } catch (error) {
           console.error(error)
           throw error
       }
    },
    updateCost: async(costId, update)=>{
        const updatedCost = await Cost.findByIdAndUpdate(costId, update)
        return updatedCost
    }


}