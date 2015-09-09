'use strict';

var $ = require( 'jquery' );
var React = require( 'react' );

var Store = require( '../store.js' );

Store.subscribe( function subToStoreOfPastesHere() {
  return console.log( Store.getState());
});

var Paste = React.createClass({
  componentDidMount: function() {
    var id = this.props.params.id;

    if ( id ) {
      // this.fetchPaste( id );
    }
  },
  fetchPaste: function( id ) {
    $.ajax({
      url: 'get-pastes?id=' + id
    }).done( this.setPaste );
  },
  getInitialState: function() {
    return {
      paste: {
        content: '',
        id: null,
        syntax: '',
        title: ''
      },
      syntax: [
        {val: 'php', name: 'PHP'},
        {val: 'javascript', name: 'JavaScript'},
        {val: 'css', name: 'CSS'}
      ]
    }
  },
  render: function() {
    return (
      <div>
        <h2>Create a paste!</h2>

        <form className="pasteform">
          <div>
            <label>Title</label><br />
            <input name="title" type="text" />
          </div>

          <div>
            <label>Content</label><br />
            <textarea cols="50" name="content" rows="10"></textarea>
          </div>

          <div>
            <label>Syntax</label><br />
            <select name="syntax">
              {this.state.syntax.map( this.renderSyntaxList )}
            </select>
          </div>

          <br /><br />

          <input name="id" type="hidden" value={this.state.paste.id} />

          <div>
            <input onClick={this.setPaste} type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  },
  renderSyntaxList: function( opt, key ) {
    return (<option key={key} value={opt.val}>{opt.name}</option>);
  },
  setPaste: function( e ) {
    e.preventDefault();

    var form = e.currentTarget.form;
    var paste = {
      title: form[0].value,
      content: form[1].value,
      syntax: form[2].value
    };

    if ( form[3].value ) {
      paste.id = form[3].value;
    }

    this.setState( setNewState );

    Store.dispatch({
      type: 'SET_PASTE',
      data: paste
    });

    // TODO: actually hook this up to data
    function setNewState( state, props ) {
      return {
        syntax: state.syntax,
        paste: paste
      };
    }
  }
});

module.exports = Paste;
