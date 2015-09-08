'use strict';

var React = require( 'react' );
var Link = require( 'react-router' ).Link;

var Menu = React.createClass({
  render: function() {
    return (
      <ul className="main-menu">
        <li>
          <Link to="one">Page One</Link>
          <ul className="sub-menu">
            <li><Link to="sub-one">Page One - Sub One</Link></li>
          </ul>
        </li>
        <li><Link to="two">Page Two</Link></li>
      </ul>
    );
  }
});

module.exports = Menu;
