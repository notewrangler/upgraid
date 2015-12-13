var Fetch = require('whatwg-fetch');
var rootURL = 'https://safe-brook-9891.herokuapp.com/api/';
var token =

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + token
			}
		})
		.then(function(response){
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
	}
}


// url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
