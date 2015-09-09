'use strict';

var React = require( 'react' );

var Alert = React.createClass({
  getInitialState: function() {
    return {
      alert: this.props.message || ''
    };
  },
  render: function() {
    var alert = "alert-success";

    return (
      <div className="alert-container">
        {( this.state.alert ) &&
          <div className="alert alert-dismissable {alert}" role="alert">
            <button data-dismiss="alert">Dismiss</button>
            {this.state.alert}
          </div>
        }
      </div>
    );
  }
});

module.exports = Alert;
