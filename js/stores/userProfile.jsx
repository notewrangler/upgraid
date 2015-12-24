var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');
// var UserStore = require('../stores/userStore');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getUserProfile: function(userId){
		return Api.get('profiles/?user=' + userId)
					.then(function(data){
						this.profile = data[0];
						console.log(this.profile);
						this.triggerChange();
				}.bind(this));
			},
			triggerChange: function() {
				this.trigger('change', this.profile);
			}
		});
