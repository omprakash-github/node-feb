const { createRequire } = require("module");

let a=10;
let b=90;

module.exports={firstname:a,lastname:b};
//auta file aauta matra export garxa hai guys

let express=require("express");
var app=express();


app.get('/',(req,res)=>
{
    res.send("hello i am omprakash lamichhane");
})

app.get('/about',(req,res)=>{
    res.send("omprakash lamichhane");
})



app.listen(3002);





