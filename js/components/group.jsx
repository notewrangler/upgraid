var React = require('react');
var Reflux = require('reflux');
var PostStore = require('../stores/postStore.jsx');
var Actions = require('../actions.jsx');



module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(PostStore, 'onChange')
	],
	getInitialState: function(){
		return {
			posts: []
		}
	},
	componentWillMount: function(){
		Actions.getPosts();
	},

	render: function(){
		return (
			<div className="post-group">
				Posts
				{this._renderPosts()}
			</div>
		)
	},
	_renderPosts: function(){
		return this.state.posts.map(function(post){
			return <p>{post}</p>
		})
	}
});
