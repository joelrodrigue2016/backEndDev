const express = require("express");

const app = express();

app.get("/",function(request,response){
  response.send("<h1> Hello isn't me your looking for.... I can see it in your eyes... I can see it in your eyes,you are all I've ever wanted</h1>");
});

app.get("/contact", function(request,response){
  response.send("contact me at joel@gmail.com")

})
app.get("/about", function(request,response){
  response.send("FAU graduate. Working in the field of Geomatics Engineering, Photogrammetry, GIS, computational and Data (spatial) analysis, remote sensing, Data Science ,web development.")

})



app.listen(3000, function(){
  console.log("Server started on port 3000")
});
