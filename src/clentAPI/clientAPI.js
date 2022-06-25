const axios = require('axios')

module.exports ={
    async getUserExpenses (){
        try {
           const user= await axios.get('http://localhost:3001/', {params:{'user_id':'62b488e4f92eeb2a3c5849a6'}});
           return {expenses:user.data.expensesList, totalExpenses:user.data.totalExpenses} ;
        } catch (error) {
            console.log(error);
        }
    },
    async getUserExpensesSortedByCategory (){ 
        try {
           const user= await axios.get('http://localhost:3001/', {params:{'user_id':'62b488e4f92eeb2a3c5849a6','orginized':''}});
           return user.data.expensesList ;
        } catch (error) {
            console.log(error);
        }
    },
    async addCost(costObj){
        // console.log(JSON.stringify(paramsObj));
        const cost=await axios.post('http://localhost:3001/',{'cost': costObj})
        return cost
    },
    async updateUser(updateObj,id){
        console.log('api got ',updateObj,id);
       return   (await axios.put('http://localhost:3001/updateUser',{'update':updateObj,'id':id})).data
       
    },
   
    async deleteCostFromUser (costObj){
      return  await axios.delete('http://localhost:3001/',{params:{cost:costObj}})
    },
   


}