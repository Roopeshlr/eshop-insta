const express = require("express");
 
const app = express();
var mock =
{
  "status": "Success",
  "message": "User Referral reminder list and earning details",
  "data": {
    "total_referral_earnings": 250,

    "pending_invites": [
      {
        "mobile": "+91-9888888888"
      },
      {
        "mobile": "+91-9888888888"
      }
    ]
  }
};

app.get("/",(req,res)=>{
    res.sendfile(__dirname+'index.html');
    })

app.get("/roopz",(req,res)=>{
res.send(mock);
})
const port = process.env.port||3000;
app.listen(port,()=>{
console.log("its working");
})