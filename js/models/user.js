// ÷var Login = require('../components/loginRegistration/login.jsx');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	url:'https://safe-brook-9891.herokuapp.com/api/users/',
	// validate: function(attrs) {
	// 	if(!attrs.username) {
	// 		$('#user').html('Username is required');
	// 	}
	// 	if(!attrs.password) {
	// 		$('#pass').html('Password is required');
	// 	}
	// },
	initialize: function() {

	}

});
