'use strict';

var React = require( 'react' );
var RouteHandler = require( 'react-router' ).RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>One</h1>
        <RouteHandler />
      </div>
    );
  }
});
