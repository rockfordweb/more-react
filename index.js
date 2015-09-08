#!/usr/bin/env node

/**
 * Taken from the React tutorial for a basic file server
 * https://github.com/reactjs/react-tutorial/blob/master/server.js
 */

'use strict';

var path = require( 'path' );
var express = require( 'express' );
var mime = require( 'mime' );

var app = express();

var folders = ['router', 'flux'];

mime.default_type = 'text/html';

app.set( 'port', ( process.env.PORT || 8000 ));

// serve our presentation statically
app.use( '/', express.static( __dirname ));

startListen( app );

folders.forEach( serveDemos );

function serveDemos( name, index ) {
  var app = express();
  var increment = index + 1;

  // we dont want conflicting ports, now do we?
  app.set( 'port', ( process.env.PORT || 8000 ) + increment );

  app.locals.name = name;

  app.use( '*', serveRoute );

  startListen( app );

  /**
   * Our React applications need to be served dynamically in a way
   * that supports HTML5's PushState.
   */
  function serveRoute( req, res ) {
    var request = req.params[0];
    var type = mime.lookup( request );
    var isFile = /[^\\]*\.(\w{2,4})$/gi;
    var absRequest = getAbsPath( request );
    var index = getAbsPath( 'index.html' );

    /**
     * We serve up our index file unless we specifically get a request
     * for another file with an extension, as opposed to a path
     */
    var content = ( isFile.test( request )) ? absRequest : index;

    console.log( Date.now(), type, content );

    res.set( 'Content-Type', type );

    res.sendFile( content );
  }

  function getAbsPath( request ) {
    var isNodeModule = /^(\/node_modules\/)/gi;

    // If our asset path begins with node_modules, make sure it's relative to root not demo
    var relative = ( isNodeModule.test( request )) ? '' : path.join( 'demos', name );

    return path.join( __dirname, relative, request );
  }
}

function startListen( app ) {
  var port = app.get( 'port' );
  var name = app.locals.name || 'index';

  app.listen( port, servingApp );

  function servingApp() {
    console.log( 'Server for ' + name + ' started at http://localhost:' + port + '/' );
  }
}
