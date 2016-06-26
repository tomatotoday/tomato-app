'use strict';

var { combineReducers } = require('redux')

module.exports = combineReducers({
  hello: (state: State = {}, action) => { return state }
})
