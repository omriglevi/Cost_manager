const User = require("../models/User");
const { createCost } = require("./cost");

module.exports = {
    addCostToUser: async (cost) => {
        console.log('addCostToUser');
        console.log(cost.spent_by);
        const result = await User.findByIdAndUpdate(cost.spent_by, {
            $inc: { totalExpenses: + cost.price },
            $push: { expensesList: cost },
            returnOriginal: false,
        })
        return result
    },
    removeCostFromUser: async (cost) => {
        const result = await User.findOneAndUpdate({ id: cost.spent_by }, {
            $inc: { totalExpenses: - cost.price },
            $pull: { expensesList: { _id: { $eq: cost._id } } },
            returnOriginal: false,
        })
        return result
    },

    createCostAndAddToUser: async (costObj) => {
        console.log('ADD COST TO USERS');
        const cost = await createCost(costObj)
        const updatedUser = await module.exports.addCostToUser(cost)
        return updatedUser

    },
}