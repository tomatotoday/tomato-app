'use strict'

import React from 'react'
import { Component } from 'react'
import { Text } from 'react'
import { StyleSheet } from 'react-native'
import { Navigator } from 'react-native'
import { Platform } from 'react-native'
import { View } from 'react-native'
import { StatusBar } from 'react-native'

type Props = {}

class ApplicationNavigator extends Component {

  constructor(props: Props) {
    super(props);

    (this: any).renderScene = this.renderScene.bind(this);
  }

  push(route: any) {
    this.refs.navigator.push(route);
  }

  pop() {
    this.refs.navigator.pop();
  }

  renderScene(route: any, navigator: Navigator) {
    return (
      <View>

      </View>
    )
  }

  configureScene(route: any, routeStack: any) {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render() {

    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
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
  }
})

module.exports = ApplicationNavigator
