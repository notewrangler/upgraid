var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getToken: function(url, data){
		return $.ajax({url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',	method:'post', data: data
		}).then(function(resp){
			this.token = resp.token;
		}.bind(this));
	}
});
