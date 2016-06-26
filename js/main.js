'use strict'

import React from 'react'
import { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configure'
import App from './app'

type State = {
  store: any
}

function setup() {
  class Root extends Component {

    state: State

    constructor() {
      super()
      
      this.state = {
        store: configureStore()
      }
    }

    render() {
      return (
        <Provider store={ this.state.store }>
          <App />
        </Provider>
      )
    }
  }

  return Root
}

module.exports = setup
