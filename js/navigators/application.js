'use strict'

import React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Navigator } from 'react-native'
import { Platform } from 'react-native'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import About from '../components/home'

type Props = {}

class ApplicationNavigator extends Component {

  renderScene(route: any, navigator: Navigator) {
    return (
      <About navigator={navigator} route={route} />
    )
  }

  configureScene(route: any, routeStack: any) {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render() {

    return (
      <Navigator
        style={styles.container}
        configureScene={this.configureScene}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    margin: 10,
  },
})

module.exports = ApplicationNavigator
