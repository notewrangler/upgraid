var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('react-router').History;
var Reflux = require('reflux')
var Link = ReactRouter.Link;
var User = require('../models/user');
var Backbone = require('backbone');
var Actions = require('../actions.jsx');
// var Registration = require('./loginRegistration/registration.jsx');
var Group = require('./group.jsx');

// var test = new User();

module.exports = React.createClass({
	mixins: [History, Actions],
	getInitialState: function(){
		return {
			username: null,
			password: null
		}
	},
	_goToGroupPage: function(){
		this.history.pushState(null, "group");
	},

	_submit: function(e) {
		e.preventDefault();
		var self = this;
		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: {username: self.state.username, password: self.state.password}
		}).then(function(resp){
			console.log(resp);
			setToken(resp.token);
			self._goToGroupPage();
		})
	},


	// _reg: function(e) {
	// 	e.preventDefault();
	// 	ReactDOM.render(<Registration />, document.getElementById('register'));
	// 	$('#register').show();
	// },
	_handleUsername: function(e){
		e.preventDefault();
		this.setState({username: e.target.value});
	},
	_handlePassword: function(e) {
		e.preventDefault();
		this.setState({password: e.target.value});
	},
	render: function(){
		return (
			<div className="fixed-nav-bar">
				<span id="logo">UpgrAid</span>
				<span id="inputBar">
					<form method='POST' onSubmit={this._submit}>
						<span id="userLogin">
							<label htmlFor="username"></label>
							<input id="username" className="loginInput" onChange={this._handleUsername} placeholder="username"/>
						</span>
						<span id="passwordLogin">
							<label htmlFor="password"></label>
							<input id="password" className="loginInput" placeholder="password" type="password" onChange={this._handlePassword}/>
						</span>
							<button id="submitLogin" type="submit">Submit</button>
							<button id="registerBtnLogin" onClick={this._reg}>Register</button>
					</form>
				</span>
				<span id="links">
				<span id="grouplink"><Link to="group">Group</Link></span>
				<span id="profileLink"><Link to="profile">Profile</Link></span>
				</span>
			</div>
		)
	}

});


function setToken(token) {
	var backboneSync = Backbone.sync;
	Backbone.sync = function(method,model,options) {
		options.headers = {
			'Authorization': 'Token ' + token
		};

		backboneSync(method,model,options);
	};
}
