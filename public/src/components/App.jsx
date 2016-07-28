var React = require("react");
var ReactDOM = require("react-dom");
var AppStore = require("../stores/AppStore");


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
		AppStore.addUpdateListener(this._onSave);
	},

	componentWillUnmount: function(){
		AppStore.removeUpdateListener(this._onSave);
	},

	render: function(){
		return(
			<div>
				<h1>Hello</h1>
			</div>
		);
	},

	_onSave: function(){
		this.setState(getAllState());
	}

});

module.exports = App;