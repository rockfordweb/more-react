'use strict';

var $ = require( 'jquery' );
var React = require( 'react' );
var Link = require( 'react-router' ).Link;

var PastesBlock = React.createClass({
  componentDidMount: function() {
    this.getPastes( this.props.count );
  },
  getInitialState: function() {
    return {
      pastes: []
    };
  },
  getPastes: function( count ) {
    $.ajax({
      url: '/get-pastes?count=' + count
    }).done( this.setPastes );
  },
  getTitle: function( sidebar ) {
    if ( sidebar ) {
      return <h3>Recent Pastes</h3>;
    } else {
      return <h2>Recent Pastes</h2>;
    }
  },
  render: function() {
    return (
      <div className="paste-list">
        {this.getTitle(this.props.sidebar)}
        <ul>
          {this.state.pastes.map( this.renderPaste )}
        </ul>
      </div>
    );
  },
  renderPaste: function( paste ) {
    return (
      <li key={paste.id}>
        <Link to="paste" params={{id: paste.id}}>
          {paste.title}
        </Link>
      </li>
    );
  },
  setPastes: function( pastes ) {
    // TODO: actually hook this up to data
    this.setState({
      pastes: []
    });
  }
});

module.exports = PastesBlock;

