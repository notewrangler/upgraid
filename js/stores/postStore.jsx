var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getPosts: function(){
		return Api.get('posts/')
					.then(function(data){
						this.posts = data;
						console.log(this.posts);
						this.triggerChange();
				}.bind(this));
			},
			triggerChange: function() {
				this.trigger('change', this.posts);
			}
		});
