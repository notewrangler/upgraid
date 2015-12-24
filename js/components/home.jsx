var React = require('react');
var LoginBar = require('./loginRegistration/loginBar.jsx');


module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<LoginBar />
					<div id="bigPic">
						<div id="home-wrapper">
						<h1 id="bigTitle">Welcome to UpgrAID</h1>
						<p>Please Log in or Register</p>
					</div>
				</div>
			</div>
		)
	}
})
