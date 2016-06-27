import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import NavigationBar from '../components/navigation-bar'

export default class AboutView extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          centerTitle={'New Discussion'}
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
