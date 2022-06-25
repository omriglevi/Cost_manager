const User = require("../models/User");

module.exports = {
  addUser: async (userObj) => {
    console.log("Add user");
    // const userObj ={               EXAMPLE FOR USER OBJECT
    //     "name": req.body.name,
    //     "personal_id": req.body.personal_id,
    //     "totalExpenses" : 0
    // }
    return await new User(userObj).save();
  },
  getUser: async (user_id) => {
    return await User.findById(user_id);
  },
  getCostsOrginizedByCategory: async (user_id) => {
    const sortingFn = (a, b) =>
      a.category > b.category ? 1 : b.category > a.category ? -1 : 0;
    let userDocAsObject = await module.exports.getUser(user_id);
    userDocAsObject = userDocAsObject.toObject();
    userDocAsObject.expensesList = [
      ...userDocAsObject.expensesList.sort(sortingFn),
    ];
    return userDocAsObject;
  },
  getCostsByDateLimit: async (user_id, monthAndYear) => {
    const { month, year } = monthAndYear;
    const reportDate = new Date(year, month, 1);
    let userDocAsObject = await module.exports.getUser(user_id);
    userDocAsObject = userDocAsObject.toObject();
    const docs = [
      ...userDocAsObject.expensesList.filter((cost) => {
        const costDate = new Date(cost.createdAt);
        return (
          costDate.getUTCFullYear() === reportDate.getUTCFullYear() &&
          costDate.getUTCMonth() === reportDate.getUTCMonth()
        );
      }),
    ];
    return docs;
  },
};
