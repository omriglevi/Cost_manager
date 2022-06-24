const User = require("../models/User");

module.exports = {
 addUser : async (req,res)=>{
        console.log('Add user');
        const userObj ={
            "name": req.body.name,
            "personal_id": req.body.personal_id,
            "totalExpenses" : 0
        }
        try {
            
            const user = await new User(userObj)
             return res.send( await user.save() );
        } catch (error) {
             res.status(400).send(error.message)
        }
    },
 getUser : async (user_id)=>{
    return  await User.findById(user_id)    
 }
}