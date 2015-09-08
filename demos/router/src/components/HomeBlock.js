'use strict';

var React = require( 'react' );
var Link = require( 'react-router' ).Link;

var HomeBlock = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Go home</h3>
        <p><Link to="home">Another paste!</Link></p>
      </div>
    );
  }
});

module.exports = HomeBlock;
