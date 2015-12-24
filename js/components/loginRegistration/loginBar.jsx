var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var History = require('react-router').History;
var Reflux = require('reflux')
var Actions = require('../../actions.jsx');
var UserStore = require('../../stores/userStore');
// var Registration = require('./registration.jsx');


module.exports = React.createClass({
	mixins: [History, Actions],
	getInitialState: function(){
		return {
			username: null,
			password: null
		}
	},
	_goToProfilePage: function(){
		var logged = _.extend(UserStore.data, {isLoggedIn: true});
		this.history.pushState(null, "profile");
	},

	_submit: function(e) {
		e.preventDefault();
		var user = _.extend(UserStore.data, {username: this.state.username});
		Actions.getToken('api-token-auth/', {username: this.state.username, password: this.state.password});

		 this._goToProfilePage();
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
				<span id="links">
				<span id="grouplink"><Link to="group">Group</Link></span>
				<span id="profileLink"><Link to="profile">Profile</Link></span>
				</span>
			</div>
		)
	}

});
