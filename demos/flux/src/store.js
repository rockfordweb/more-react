'use strict';

var _ = require( 'lodash' );
var Redux = require( 'redux' );

var store = function store( state, action ) {
  switch ( action.type ) {
    case 'GET_PASTE':
      return getPaste( action.data );
      break;

    case 'SET_PASTE':
      updatePaste( action.data );
      return state;
      break;

    default:
      return state;
      break;
  }
};

var Store = Redux.createStore( store );

localStorage.setItem( 'pastes', '{}');

module.exports = Store;

function updatePaste( data ) {
  var pastes = JSON.parse( localStorage.getItem( 'pastes' )) || {};
  var id = data.id || pastes.length + 1;
  var jsonifiedPastes = JSON.stringify( _.extend({
    id: data
  }, pastes ));

  localStorage.setItem( 'pastes', jsonifiedPastes );
}

function getPaste( id ) {
  var pastes = JSON.parse( localStorage.getItem( 'pastes' ));

  return pastes[id];
}
