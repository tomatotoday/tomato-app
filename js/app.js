'use strict'

import StatusBar from 'StatusBar'
import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import ApplicationNavigator from './navigators/application'

class App extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='light-content'/>
        <ApplicationNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = App;
