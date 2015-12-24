var React = require('react');
var Reflux = require('reflux');
var ProfileStore = require('../../stores/ProfileStore.jsx');
var Nav = require('../common/nav.jsx');
var Greeting =require('../common/greeting.jsx');
var GoalList = require('./goals/goalList.jsx');
var Friends = require('./friends/friends.jsx');
var Group = require('./groups/groups.jsx');
var AvatarRankXp = require('./avatarRankXp.jsx');
// var FriendRequest = require('./friends/friendRequest.jsx');
// var PostList = require('./post/postList.jsx');
var UserStore = require('../../stores/userStore');
var Actions = require('../../actions.jsx');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ProfileStore, '_onChange')
	],
	getInitialState: function(){
		return {
			rank: null,
			exp: null,
			name: null,
			goals: [],
			friends: [],
			groups: []
		}
	},
	componentWillMount: function(){
		Actions.getProfile(UserStore.data.username);
	},
	render: function(){

		return (
			<div id="profile-wrapper">
				<AvatarRankXp rank={this.state.rank} exp={this.state.exp}/>
				<Greeting name={this.state.name}/>
				<GoalList goals={this.state.goals} />
				<Friends friends={this.state.friends} />
				<Group groups={this.state.groups} />
			</div>

		)
	},
	_onChange: function(event, profile) {
		this.setState({
			rank: profile.rank,
			exp: profile.exp,
			name: profile.user.first_name,
			goals: profile.user.goal_set,
			friends: profile.user.friend_set,
			groups: profile.user.group_set
		})
	}
});



// <Nav  username={this.props.username}/>
//
//
//
// <FriendRequest  />
//
//
