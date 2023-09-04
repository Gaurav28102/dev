const express=require("express");
const app=express()


app.get("/",(req,res)=>{
    console.log("Hello This is welcome page");
    res.send("Hello world");
})
app.listen(3000,(req,res)=>{
    console.log("Server running  again...Check 6")
})
