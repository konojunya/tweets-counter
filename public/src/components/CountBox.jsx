var React = require("react");
var $ = require("jquery");
var ReactPropTypes = React.PropTypes;

var CountBox = React.createClass({

	propTypes: {
    count: ReactPropTypes.number
  },

	render: function(){

		if(this.props.count%10 == 0){
      $("#count").animate({
        "font-size": "10rem"
      },100);
      setTimeout(function(){
        $("#count").animate({
          "font-size": "5rem"
        },100);
      },500);
    }

		return(
			<div className="count">
				<span id="count">{this.props.count}</span> tweets.
			</div>
		);
	}

});

module.exports = CountBox;