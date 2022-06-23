
require('dotenv').config();
const express = require('express');
const db = require('./databases/db')
const mongoose = require('mongoose');
const { createCost, addUser, updateUserWithCost: updateUserWithPrice, addCostToUser } = require('./controllers/cost_manager');
const mongoString = process.env.DB_URL;
const port = process.env.PORT || 3000

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
const app = express();
app.use(express.json());
app.post('/',  addCostToUser)
db.connect(mongoString)
.then(()=>console.log("Connected to DB"))
.then(()=>{
    app.listen(port,function(){
        console.log(`Server is up and running on port ${port}`);
    })
})
.catch(err=>console.error(err))