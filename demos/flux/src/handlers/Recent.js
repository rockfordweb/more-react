'use strict';

var React = require( 'react' );

var PastesBlock = require( '../components/PastesBlock.js' );

module.exports = React.createClass({
  render: function() {
    return <PastesBlock count="5" />;
  }
});
