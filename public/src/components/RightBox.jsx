var React = require("react");
var ReactPropTypes = React.PropTypes;

var Tweet = require("./Tweet.jsx");

var RightBox = React.createClass({

	propTypes: {
    tweets: ReactPropTypes.object
  },

	render: function(){

		var tweets = this.props.tweets;
		var TweetList = [];

		for(var key in tweets){
			TweetList.unshift(
				<Tweet
					key={key}
					body={tweets[key].body}
					icon={tweets[key].icon}
					screenName={tweets[key].screenName}
				/>
			);
		}

		return(
			<div className="right">
				<ul id="timeline">
					{TweetList}
				</ul>
			</div>
		);
	}

});

module.exports = RightBox;