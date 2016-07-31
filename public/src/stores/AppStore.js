var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var AppConstants = require("../constants/AppConstants");
var assign = require("object-assign");

var UPDATE_EVENT = "update";

var _tweets = {};
var _userData = {};

function tweet(tweet){
	var userName = tweet.username;
	_tweets[tweet.id] = {
		icon: tweet.icon,
		screenName: tweet.username,
		body: tweet.body,
		count: tweet.count
	}
}

var AppStore = assign({},EventEmitter.prototype,{

	getAll: function(){
		return _tweets;
	},

	emitUpdate: function(){
		this.emit(UPDATE_EVENT);
	},

	addUpdateListener: function(callback){
		this.on(UPDATE_EVENT,callback)
	},

	removeUpdateListener: function(callback){
		this.removeListener(UPDATE_EVENT,callback);
	}

});

AppDispatcher.register(function(action){

	switch(action.actionType){

		case AppConstants.CREATE_TWEET:
			tweet(action.tweet);
			AppStore.emitUpdate();
			break;

		default:
			console.log("switch miss");

	}

});

module.exports = AppStore;