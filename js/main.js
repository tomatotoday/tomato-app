'use strict'

import React from 'react'
import { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import I18n from 'react-native-i18n'
import configureStore from './store/configure'
import Router from './navigators/router'
import Translations from './translations'

type State = {
  store: any
}

function setup() {
  class Root extends Component {

    state: State

    constructor() {
      super()

      // Setup store
      this.state = {
        store: configureStore()
      }

      // Setup I18n
      I18n.fallbacks = true
      I18n.translations = Translations
      I18n.locale = 'zh'

    }

    render() {
      return (
        <Provider store={ this.state.store }>
          <Router />
        </Provider>
      )
    }
  }

  return Root
}

module.exports = setup
