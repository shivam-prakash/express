var express=require("express");
var app=express();
app.get("/",function(req,res){
	//res.send("hi there welcome to my assignment");
res.render("app.ejs");
});

app.get("/request/:thing",function(req,res){
	var thing=req.params.thing;
	res.render("love.ejs",{thing:thing});
});
app.listen(3000,function(){
	console.log("starting new server");
});
