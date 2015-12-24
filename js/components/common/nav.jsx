var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

module.exports = React.createClass({

	render:function(){
		return(
			<div id='navContainer'>
					<span id="logo">UpgrAid</span>
					<ul id="navUl">
						<li><Link to="profile">Profile</Link></li>
						<li>Group 1</li>
						<li>Group 2</li>
						<li>Group 3</li>
					</ul>
				</div>)
	}
});
