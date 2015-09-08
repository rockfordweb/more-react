'use strict';

var React = require( 'react' );

var Paste = React.createClass({
  getInitialState: function() {
    return {
      paste: {
        content: '',
        updated: '',
        id: '',
        syntax: '',
        title: ''
      }
    };
  },
  render: function() {
    var pasteClass = 'language-' + this.state.paste.syntax;

    return (
      <div>
        <h2>{this.state.paste.title}</h2>

        <p>Pasted on {this.state.paste.updated}</p>

        <div>
          <pre>
            <code className={pasteClass}>{this.state.paste.content}</code>
          </pre>
        </div>
      </div>
    );
  }
});

module.exports = Paste;
