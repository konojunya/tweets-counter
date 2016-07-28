var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var AppConstants = require("../constants/AppConstants");
var assign = require("object-assign");

var UPDATE_EVENT = "update";

var _tweets = {};

function createTweet(tweet){}

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

	switch(aciton.actionType){

		case AppConstants.CREATE_TWEET:
			createTweet(action.tweet);
			AppStore.emitUpdate();
			break;

		default:
			console.log("switch miss");

	}

});

module.exports = AppStore;