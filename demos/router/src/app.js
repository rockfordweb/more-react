'use strict';

var React = require( 'react' );
var RouteHandler = require( 'react-router' ).RouteHandler;

var Menu = require( './menu.js' );

var App = React.createClass({
  render: function() {
    return (
      <div id="app">

        <header>
          <h1>More React with Rockford Web Devs -- Router</h1>
          <Menu />
        </header>

        <RouteHandler />

        <footer>
          <span>&copy; 2015 Rockford Web Devs</span>
        </footer>

      </div>
    );
  }
});

module.exports = App;
