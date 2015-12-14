var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getToken: function(url, data){

		return Api.login(url, data)
					.then(function(response){
						this.token = response.token;
						console.log(this.token);
				}.bind(this));
			}
		});
