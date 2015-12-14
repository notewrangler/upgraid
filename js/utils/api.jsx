var Fetch = require('whatwg-fetch');
var rootUrl = 'https://safe-brook-9891.herokuapp.com/api/';
var Actions = require('../actions.jsx');
var TokenStore = require('../stores/tokenStore.jsx');
var token = TokenStore.token || "";

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + token
			}
		})
		.then(function(response){
			console.log(response);
			return response.toJSON();
		})
	},
	post: function(url, data) {
		return fetch(rootUrl + url, {
			method:'post',
			data: data
		})
		.then(function(response){
			return response.toJSON();
		})
	},
	login: function(url, data) {
		return fetch(rootUrl + url, {
			method: 'post',
			data: data
		}).then(function(response){
			return response.token;
		})
	}
}


// url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
