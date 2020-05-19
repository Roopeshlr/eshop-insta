const express = require("express");
 
const app = express();


app.get("/roopz",(req,res)=>{
res.send("ghsdkhasd");
})
const port = process.env.port||3000;
app.listen(port,()=>{
console.log("its working");
})