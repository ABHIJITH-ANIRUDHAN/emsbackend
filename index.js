require('dotenv').config()
const express =require ("express")
const cors=require("cors")
const app=express()
require('./db/connection')
const PORT= process.env.PORT || 4000
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('EMS Server Started!!!')
})
app.listen(PORT,()=>{
    console.log(`Ems Server started at ${PORT}`);
})