import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import NavigationBar from './navigation-bar'

export default class AboutView extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const leftButtonConfig = {
      title: 'Back',
      tintColor: '#fff',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'About Tomato',
      tintColor: '#fff',
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          centerTitle={'About Tomato'}
          leftTitle={'Back'}
          leftHandler={() => alert('hello')}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
