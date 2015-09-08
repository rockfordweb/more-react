'use strict';

var React = require( 'react' );

module.exports = React.createClass({
  render: function() {
    return (
       <div>
        <h2>Register</h2>

        <form className="registerform">
          <div>
            <label>Email Address</label><br />
            <input name="email" type="email" />
          </div>
          <div>
            <label>Password</label><br />
            <input name="password" type="password" />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
});
