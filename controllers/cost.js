const Cost = require("../models/Cost").model;

module.exports = {
  createCost: async (cost) => {
      return await new Cost(cost).save();
  },
  updateCost: async (costId, update) => {
   return await Cost.findByIdAndUpdate(costId, update);
  },
};
