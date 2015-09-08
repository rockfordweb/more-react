'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );

var App = require( './app.js' );
var One = require( './one.js' );
var SubOne = require( './sub-one.js' );
var Two = require( './two.js' );

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={One} />
    <Route name="one" handler={One}>
      <Route name="sub-one" handler={SubOne} />
    </Route>
    <Route name="two" handler={Two} />
  </Route>
);


Router.run( routes, Router.HistoryLocation, renderRootRoute );


function renderRootRoute( Root ) {
  React.render( <Root />, document.body );
}
