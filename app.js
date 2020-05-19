const express = require("express");
 
const app = express();


app.get("/roope",(req,res)=>{
res.send("ghsdkhasd");
})

app.listen(8000,()=>{
console.log("its working");
})