const express=require("express");
const app=express()


app.get("/",(req,res)=>{
    console.log("Hello This is welcome page");
    res.send("Hello world Change 2");
})
app.listen(8121,(req,res)=>{
    console.log("Server running  again...Check 10")
})
