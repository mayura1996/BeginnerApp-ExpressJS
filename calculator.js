const express = require('express');
const app = express();

app.get("/",function(req,res){
  res.send("Hello Worlds");
})

app.listen(3000,function(){
  console.log("Server is listening to the port 3000");
})
