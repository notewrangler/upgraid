var React = require('react');
var Navbar = require('./navbar.jsx');


module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Navbar />
				<h1 id="bigTitle">Welcome to UpgrAID</h1>
				<p>Please Log in or Register</p>
			</div>
		)
	}
})
