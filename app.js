var express = require("express"),
		app = express(),
		io = require("socket.io"),
		http = require("http").Server(app),
		path = require("path"),
		Twit = require("twit"),
		PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));

var twitter = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
});

app.get("/",function(req,res){
	res.sendfile("views/main.html");
});

http.listen(PORT,function(){
	console.log("app is listen on",PORT)
});