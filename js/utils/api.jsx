var Fetch = require('whatwg-fetch');
var rootUrl = 'https://safe-brook-9891.herokuapp.com/api/';
var Actions = require('../actions.jsx');
var TokenStore = require('../stores/tokenStore.jsx');
var PostStore = require('../stores/postStore.jsx');
var Cookies = require('../cookies');



module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + Cookies.get('token')
			}
		}).then(function(response){
				return response.json();
		})
	},
	post: function(url, data) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + Cookies.get('token')
			},
			method:'post',
			data: data
		})
		.then(function(response){
			return response.json();
		})
	},
	put: function(url, data){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + Cookies.get('token')
			},
			method:'put',
			data: data
		})
		.then(function(response){
			return response.json();
		})
	},
	patch: function(url, data){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + Cookies.get('token')
			},
			method:'patch',
			data: data
		})
		.then(function(response){
			return response.json();
		})
	},
	delete: function(url, data){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Token ' + Cookies.get('token')
			},
			method:'delete',
			data: data
		})
		.then(function(response){
			return response.json();
		})
	}
}
