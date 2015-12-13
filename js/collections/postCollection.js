var Post = require('../models/post');

module.exports = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/posts/',
	model: Post
});
