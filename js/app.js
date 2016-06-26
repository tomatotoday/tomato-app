'use strict'

import StatusBar from 'StatusBar'
import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'

class App extends Component {

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
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
