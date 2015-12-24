var React = require('react');
var GoalInput = require('./goalInput.jsx');
var GoalItem = require('./GoalItem.jsx');

var GoalList = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.goals
		}
	},
	_addInput: function(collection) {
			this.setState({
			data: collection
		})

	},
	render: function() {
		return(
			<div id='goalContainer'>
				<h2 id="goalHeader">Your Goals</h2>
				<GoalInput data={this.state.data} addInput={this._addInput}/>
				<GoalItem data={this.state.data} addInput={this._addInput}/>
			</div>
			)
	}
})

module.exports = GoalList;
