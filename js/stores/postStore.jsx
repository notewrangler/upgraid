var React = require('react');
var PostCollection = require('../collections/postCollection');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getPosts: function(){

		return Api.get('posts/')
					.then(function(json){
						this.posts = json.data;
						this.triggerChange();
				}.bind(this));
			},
			triggerChange: function() {
				this.trigger('change', this.posts);
			}
		});
