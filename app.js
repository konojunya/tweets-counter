var express = require("express"),
		app = express(),
		path = require("path"),
		Twit = require("twit"),
		ECT = require('ect'),
    ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext: '.ect' }),
		PORT = 3000;

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.use(express.static(path.join(__dirname, "public")));

var server = app.listen(PORT,function(){
	console.log("app is listen localhost:",PORT)
});

var io = require('socket.io')(server);

var twitter = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
});
var count = 0;
var _userData = {};
var userTimeLine = twitter.stream("statuses/filter",{track: ['react']});
userTimeLine.on("tweet",function(tweet){
	if(_userData[tweet.user.screen_name]){
		_userData[tweet.user.screen_name].count += 1;
	}else{
		_userData[tweet.user.screen_name] = {
			count: 1,
			icon: tweet.user.profile_image_url_https.replace(/_normal/,""),
			name: tweet.user.name
		}
	}
	var data = {
		id: tweet.id_str,
		icon: tweet.user.profile_image_url_https.replace(/_normal/,""),
		body: tweet.text,
		username: tweet.user.screen_name,
		count: ++count
	}
	io.sockets.emit("tweet",data);
});

app.get("/",function(req,res){
	res.sendfile("views/main.html");
});
app.get("/order",function(req,res){
	res.render("order.ect",{data: JSON.stringify(_userData)});
});
app.get("/*",function(req,res){
	res.redirect("/order");
})