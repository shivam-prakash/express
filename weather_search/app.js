var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
	res.render("search");
});
app.get("/results",function(req,res){
	var key=req.query.search;
		var url="http://api.openweathermap.org/data/2.5/weather?q="+key+"&APPID=c7d320bbc2eb049608be5d7f901e975f";
	request(url,function(error,response,body){
		if(!error && response.statusCode==200){
		var data =JSON.parse(body);
		console.log(data);
			res.render("results",{data:data})
		}
	});
});
app.listen(3000,function(){
	console.log("weather server started");
});