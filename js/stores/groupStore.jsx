var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getGroupData: function(id){
		return Api.get('groups/' + id)
					.then(function(data){
						this.groupData = data;
						this.triggerChange();
				}.bind(this));
			},
			triggerChange: function() {
				this.trigger('change', this.groupData);
			}
		});
