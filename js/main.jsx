require('../css/main.css');
require('../css/nav.css');
require('../css/home.css');
require('../css/profile.css');
require('../css/goalList.css');
require('../css/groups.css');
require('../css/friends.css');


var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes.jsx');

ReactDOM.render(Routes, document.getElementById('app'));
