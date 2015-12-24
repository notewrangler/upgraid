var React = require('react');
var Reflux = require('reflux');
var PostStore = require('../../stores/postStore.jsx');
var Actions = require('../../actions.jsx');
// var TokenStore = require('../stores/tokenStore.jsx');
var userStore = require('../../stores/userStore');
var Cookies = require('../../cookies');


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(groupStore, 'onChange')
	],
	getInitialState: function(){
		return {
			groupId: null,
			posts: [],
			
		}
	},
	componentWillMount: function(){
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
			return <p key={post.id}>{post.title}</p>
		})
	},
	onChange: function(event, posts) {
		this.setState({posts: posts})
	}
});
