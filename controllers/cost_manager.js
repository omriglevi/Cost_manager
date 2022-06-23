const Cost = require("../models/Cost");
const User = require("../models/User");

module.exports = {
     createCost : async(cost)=>{
        console.log('---------CREATE COST ----------');
        console.log(cost);
        try {
            const costCeated = await new Cost(cost)
           return  await costCeated.save();
       } catch (error) {
           console.error(error)
           return error
       }
    },
     updateUserWithCost : async( cost)=>{
        console.log('UPDATE USER WTH COST');
        console.log(cost.spent_by);
        const result = await User.findOneAndUpdate({id:cost.spent_by} , {
            $inc : {totalExpenses: + cost.price },
            $push: {expenses:cost }
        })
        return result
    },
     addCostToUser: async (req,res)=>{
        console.log('ADD COST TO USERS');
        if(!req.body.cost){
            return res.status(400).send("did not provide cost")
        }
        try {
           const cost = await module.exports.createCost(req.body.cost)
           const updatedUser = await module.exports.updateUserWithCost(cost)
           return res.status(200).send(updatedUser)
        } catch (error) {
            return res.status(400).send(error.message)
            
        }
    },
    async addUser(req,res){
        console.log('Add user');
        const userObj ={
            "name": "Omri Levy",
            "personal_id": "307881326",
            "totalExpenses" : 0
        }
        try {
            
            const user = await new User(userObj)
             return res.send( await user.save() );
        } catch (error) {
             res.status(400).send(error.message)
        }
    }
}