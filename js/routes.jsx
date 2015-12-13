var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route= ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var App = require('./components/app.jsx');
var Home = require(('./components/home.jsx'));
var Group = require('./components/group.jsx');
var Profile = require('./components/profile.jsx');


var history = createBrowserHistory();

module.exports = (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="group" component={Group} />
			<Route path="profile" component={Profile} />
		</Route>
	</Router>
)
