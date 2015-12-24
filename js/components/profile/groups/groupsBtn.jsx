var React = require('react');
var ReactRouter =require('react-router');
var Link = ReactRouter.Link;

var GroupsBtn = React.createClass({
	_GroupsNav: function(e) {

		e.preventDefault();

		this.props.router.navigate('group/'+ this.props.id , {trigger:true})
	},
	render:function(){

		return(<button className="group" ><Link to="group/" + this.props.id id={this.props.id}>{this.props.id}</Link></button>)
	}
});

module.exports = GroupsBtn;
