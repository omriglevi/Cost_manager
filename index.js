
require('dotenv').config();
const express = require('express');
const db = require('./databases/db')
const cors = require('cors');
const router = require('./routers/cost_manager');
const mongoString = process.env.DB_URL;
const port = process.env.PORT || 3001


const app = express();
app.use(cors());
app.use(express.json());
app.use('/',  router);
db.connect(mongoString)
.then(()=>console.log("Connected to DB"))
.then(()=>{
    app.listen(port,function(){
        console.log(`Server is up and running on port ${port}`);
    })
})
.catch(err=>console.error(err));