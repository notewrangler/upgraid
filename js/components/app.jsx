var React = require('react');
var LoginBar = require('./loginRegistration/loginBar.jsx');
var Nav = require('./common/nav.jsx');
var UserStore = require('../stores/userStore');


module.exports = React.createClass({
	render: function(){
		return (
			<div>
				{UserStore.data.isLoggedIn ? <Nav /> :
				<LoginBar /> }
				{this.props.children}
			</div>
		)
	}
})
