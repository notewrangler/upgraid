var React = require('react');
var Reflux = require('reflux');
var PostStore = require('../stores/postStore.jsx');
var Actions = require('../actions.jsx');
var TokenStore = require('../stores/tokenStore.jsx');



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
		console.log(TokenStore.token);
		Actions.getPosts();
	},

	render: function(){
		return (
		<div id="container">
			<div className="post-group">
				Posts
				{this._renderPosts()}
			</div>
		</div>
		)
	},
	_renderPosts: function(){
		return this.state.posts.map(function(post){
			return <p>{post}</p>
		})
	}
});
