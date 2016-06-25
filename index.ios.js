/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class mobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('./public/images/tomato.png')} />
        <Text style={styles.welcome}>
          Hello World!
        </Text>
      </View>
    );
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
  logo: {
    marginBottom: 5,
    width: 300,
    height: 300,
  },
});

AppRegistry.registerComponent('mobile', () => mobile);
