'use strict';

var React = require( 'react' );

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Login</h2>

        <form className="loginform">
          <div>
            <label>Email Address</label><br />
            <input name="email" type="email" />
          </div>
          <div>
            <label>Password</label><br />
            <input name="password" type="password" />
          </div>
          <div>
            <label>Remember Me?</label><br />
            <input name="remember" type="checkbox" value="1" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
});
