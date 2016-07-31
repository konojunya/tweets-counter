var React = require("react");
var ReactDOM = require("react-dom");
var AppStore = require("../stores/AppStore");
var AppActions = require("../actions/AppActions");
var socket = require("../actions/socket");

/*
*		component
*/
var LeftBox = require("./LeftBox.jsx");
var RightBox = require("./RightBox.jsx");

function getAllState(){
	return {
		tweets: AppStore.getAll()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAllState();
	},

	componentDidMount: function(){
		socket.on("tweet",function(data){
			AppActions.createTweet(data);
		});
		AppStore.addUpdateListener(this._onSave);
	},

	componentWillUnmount: function(){
		AppStore.removeUpdateListener(this._onSave);
	},

	render: function(){

		var key = "",
				keyArray = Object.keys(this.state.tweets);

		key = keyArray[keyArray.length -1];

		var count = key ? this.state.tweets[key].count : 0;

		return(
			<div>
				<div className="triangle"></div>
				<div className="triangle_br"></div>

				<LeftBox
					count={count}
				/>
				<RightBox
					tweets={this.state.tweets}
				/>
			</div>
		);
	},

	_onSave: function(){
		this.setState(getAllState());
	}

});

module.exports = App;