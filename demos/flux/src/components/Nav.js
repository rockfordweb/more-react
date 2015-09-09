'use strict';

var React = require( 'react' );
var Link = require( 'react-router' ).Link;

var Menu = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="home">Paste Something</Link>

            <ul className="nav navbar-nav">
              <li><Link to="recent">Recent Pastes</Link></li>
              <li><Link to="login">Login</Link></li>
              <li><Link to="register">Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Menu;
