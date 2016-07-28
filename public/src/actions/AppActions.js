var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");

var AppActions = {

	createTweet: function(object){
		AppDispatcher.dispatch({
			actionType: AppConstants.CREATE_TWEET,
			tweet: object
		});
	}

}

module.exports = AppActions;