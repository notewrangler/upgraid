require('../css/main.css');
require('../css/nav.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes.jsx');

ReactDOM.render(Routes, document.getElementById('app'));
