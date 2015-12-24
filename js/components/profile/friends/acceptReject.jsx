var React = require('react');
var Backbone = require('backbone');


var AcceptReject = React.createClass({

	getInitialState: function(){
		return {
			request: this.props.requester,
			name: null
		}
	},
	_loadUserName: function(name){
		this.setState({name: name})
	},
	componentWillMount: function(){
		var ReqUsr = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/users/' + this.props.requester.from_friend
		})
		var RQ = new ReqUsr();
		self = this
		RQ.fetch({
			success: function(resp){
				reqr = resp.toJSON();
				var name = reqr.username;
				self._loadUserName(name);
			}
		})
	},

	componentWillReceiveProps: function(newProps){
		var props = newProps;
		var ReqUsr = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/users/' + props.requester.from_friend
		})
		var RQ = new ReqUsr();
		self = this
		RQ.fetch({
			success: function(resp){
				reqr = resp.toJSON();
				var name = reqr.username;
				self._loadUserName(name);
			}
		})
	},

	_handleAccept: function(event){
		event.preventDefault();
		var Fra = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/friends/' + this.props.requester.id
		});
		var Fa = new Fra();
		Fa.set({
			id: this.props.requester.id,
			to_friend: this.props.requester.to_friend,
			from_friend: this.props.requester.from_friend,
			accepted: true
		});
		Fa.save();
		$('#reqObj').hide();
	},

	_handleDecline: function(event){
		event.preventDefault();
		var Frd = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/friends/' + this.props.requester.id
		});
		var Fd = new Frd();
		Fd.set({
			id: this.props.requester.id,
			to_friend: this.props.requester.to_friend,
			from_friend: this.props.requester.from_friend,
			accepted: false
		});
		Fd.save();
		$('.reqObj').hide();

	},
	render: function(){
		return (
			<div className="reqObj">
				<span className="requester">{this.state.name}</span>
				<span className="accbutton"><button id="accept" onClick={this._handleAccept}>Accept</button></span>
				<span className="rejbutton"><button id="decline" onClick={this._handleDecline}>Deline</button></span>
			</div>

		)
	}
});

module.exports = AcceptReject;
