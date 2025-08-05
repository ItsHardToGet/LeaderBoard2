import express from "express"
import cors from "cors";
import { configDotenv } from "dotenv"
configDotenv({path:'./.env'});
import Arouter from './routes/AuthR.js'
// import { config } from "dotenv";
// config({ path: './.env' });


import { database_connectivity } from './config/db.js'
const PORT=process.env.PORT;
const app =express();
app.use(express.json());
app.use (cors());
database_connectivity();
app.use('/api',Arouter);
app.listen(PORT,(err)=>{
console.log("server connectd",PORT);


})