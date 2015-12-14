var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;
var Reflux = require('reflux')
var Actions = require('../actions.jsx');
// var Registration = require('./registration.jsx');
var Group = require('./group.jsx');

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
		Action.getToken('api-token-auth', {username: this.state.username, password: this.state.password})
		this._goToGroupPage();
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
		<span id="inputBar">
			<form id="inputBar" method='POST' onSubmit={this._submit}>
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
	}
});
