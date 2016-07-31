var React = require("react");
var ReactPropTypes = React.PropTypes;

var Tweet = React.createClass({

	propTypes: {
    body: ReactPropTypes.string,
    icon: ReactPropTypes.string,
    screenName: ReactPropTypes.string,
  },

	render: function(){

		var body = this.props.body,
				icon = this.props.icon,
				screenName = this.props.screenName

		return(
			<li className="item clearfix">
				<div className="img">
					<img src={icon} className="icon"/>
				</div>
				<p className="tweet">
					<b className="username">@{screenName}</b>
					<br/>
					<span className="body">{body}</span>
				</p>
			</li>
		);
	}

});

module.exports = Tweet;