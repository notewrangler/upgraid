var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');
var Cookies = require('../cookies');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getToken: function(url, data){
		var that = this;
		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: data
		}).then(function(resp){
			Cookies.set('token', resp.token);
		});
	}
});
