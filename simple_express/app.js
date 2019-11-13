var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("this is root");
})
app.get("/cat",function(req,res){
	res.send("meow");
});	
app.get("/dog",function(req,res){
	res.send("bow bow");
});
app.get("/home",function(req,res){
	res.redirect("/");
});
app.listen(3000,function(){
	console.log("server started");
});