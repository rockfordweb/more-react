'use strict';

var React = require( 'react' );
var Router = require( 'react-router' );
var RouteHandler = Router.RouteHandler;

var Alert = require( '../components/Alert.js' );
var Nav = require( '../components/Nav.js' );

var HomeBlock = require( '../components/HomeBlock.js' );
var PastesBlock = require( '../components/PastesBlock.js' );

var App = React.createClass({
  mixins: [
    Router.State
  ],
  render: function() {
    var pathName = this.getPathname();

    return (
      <div id="app">

        <Alert />

        <Nav />

        <div className="container-fluid">
          <div className="main row">

            <div className="content col-xs-8">
              <RouteHandler />
            </div>

            <div className="sidebar col-xs-4">
              {( pathName !== '/' ) && <HomeBlock />}
              {( pathName !== '/recent' ) && <PastesBlock count="5" sidebar={true} />}
            </div>

          </div>
        </div>

      </div>
    );
  }
});

module.exports = App;
