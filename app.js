var express = require("express"),
		app = express(),
		io = require("socket.io"),
		http = require("http").Server(app),
		path = require("path"),
		Twit = require("twit"),
		settings = require("./settings.js"),
		PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));

var twitter = new Twit(settings);

app.get("/",function(req,res){
	res.sendfile("views/main.html");
});

http.listen(PORT,function(){
	console.log("app is listen on",PORT)
});