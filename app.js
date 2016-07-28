var express = require("express"),
		app = express(),
		http = require("http").Server(app),
		path = require("path"),
		PORT = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
	res.sendfile("views/main.html");
});

http.listen(PORT,function(){
	console.log("app is listen on",PORT)
})