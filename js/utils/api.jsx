var Fetch = require('whatwg-fetch');
var rootUrl = 'https://safe-brook-9891.herokuapp.com/api/';
var Actions = require('../actions.jsx');
var TokenStore = require('../stores/tokenStore.jsx');



module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + token
			}
		})
		.then(function(response){
			console.log(response);
			this.data = response.json();
		})
	},
	post: function(url, data) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + token
			},
			method:'post',
			data: data
		})
		.then(function(response){
			return response.json();
		})
	}
}


// url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
