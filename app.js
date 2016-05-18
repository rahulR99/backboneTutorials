var express =require("express");

var app=express();
var port =5000;
app.use(express.static('public/lib'));
app.use(express.static('src/client'));
app.listen(port , function(err){
    console.log("****************************************");
    console.log("running server on port number : "+port);
});
