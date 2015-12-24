var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions.jsx');
var Api = require('../utils/api.jsx');
var UserStore = require('../stores/userStore');

module.exports = Reflux.createStore({
	listenables: [Actions],

	getProfile: function(user){
		return Api.get('profiles/?username=' + user)
					.then(function(data){
						this.profile = data[0];
						this.triggerChange();
				}.bind(this));
			},
			triggerChange: function() {
				this.trigger('change', this.profile);
			}
		});
