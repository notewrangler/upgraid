var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route= ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var App = require('./components/app.jsx');
var Home = require(('./components/home.jsx'));
var GroupHome = require('./components/group/groupHome.jsx');
var ProfileHome = require('./components/profile/profileHome.jsx');
var UserViewApp = require('./components/userView/userViewApp.jsx');


var history = createBrowserHistory();

module.exports = (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="group/:id" component={GroupHome} />
			<Route path="profile" component={ProfileHome} />
			<Route path="userView/:id" component={UserViewApp} />
		</Route>
	</Router>
)
