var React = require("react");
var ReactPropTypes = React.PropTypes;

/*
*		component
*/
var CountBox = require("./CountBox.jsx");

var LeftBox = React.createClass({

	propTypes: {
    count: ReactPropTypes.number
  },

	render: function(){

		return(
			<div className="left">
				<CountBox
					count={this.props.count}
				/>
				<p>#StartupVR</p>
				<div className="sponsor">
					<img src="http://static1.squarespace.com/static/55fe69fee4b089b946a6b666/t/55fed4a1e4b0af0b2a7227c1/1442763940106/" />
					<img src="https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=120,dh=120,da=l,ds=s,cw=120,ch=120,cc=FFFFFF)/assets/images/31004/original/8f8cdbfd-ccee-40fa-a5f6-264ac6b4eeb9.png?1429258437" alt="" />
				</div>
			</div>
		);
	}

});

module.exports = LeftBox;