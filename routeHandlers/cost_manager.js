const { updateCost } = require("../controllers/cost")
const { createCostAndAddToUser, removeCostFromUser } = require("../controllers/cost_manager")
const { getUser } = require("../controllers/user")

module.exports={
    getRequestHandler : async (req, res)=>{
        try {
            const user_id = req.query.user_id
        const user = await getUser(user_id)
        return res.status(200).send(user)
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message)
        }
        

    },
    postRequestHandler : async (req, res)=>{
        try {
             const cost = req.body.cost
             const updatedUser = await createCostAndAddToUser(cost)
             return res.status(200).send(updatedUser)

        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message)
        }
       
    },
    putRequestHandler : async (req, res)=>{
        const costId = req.body.cost._id
        const update = req.body.update
        try {
             const updatedCost = await updateCost(costId, update)
             return res.status(200).send(updatedCost) 
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message)
            
        }
       
    },
    deleteRequestHandler : async (req, res)=>{
        const cost = JSON.parse(req.query.cost)
        try {
            const removedCost = await removeCostFromUser(cost)
            return res.status(200).send(removedCost) 
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message)
            
        }
    },

}