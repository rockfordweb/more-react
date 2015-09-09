'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );

var App = require( './handlers/App.js' );
var Paste = require( './handlers/Paste.js' );
var PasteForm = require( './handlers/PasteForm.js' );
var Recent = require( './handlers/Recent.js' );
var Login = require( './handlers/Login.js' );
var Register = require( './handlers/Register.js' );

var Provider = require( 'redux' ).Provider;
var Store = require( './store.js' );

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route path="/" name="home" handler={App}>
    <DefaultRoute handler={PasteForm} />
    <Route path="/paste/new" name="new-paste" handler={PasteForm}>
      <Route path="/paste/edit/:id" name="edit-paste" handler={PasteForm} />
      <Route path="/paste/:id" name="paste" handler={Paste} />
    </Route>
    <Route name="recent" handler={Recent} />
    <Route name="login" handler={Login} />
    <Route name="register" handler={Register} />
  </Route>
);


Router.run( routes, Router.HistoryLocation, renderRootRoute );


function renderRootRoute( Root ) {
  React.render( (
    <Provider store={Store}>
      {function() { return <Root />; }}
    </Provider>
  ), document.body );
}
