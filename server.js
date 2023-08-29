const express=require("express");
const app=express()


app.get("/",(req,res)=>{
    console.log("Hello This is welcome page");
})
app.listen(3000,(req,res)=>{
    console.log("Server running...")
})