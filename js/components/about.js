import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import NavigationBar from 'react-native-navbar'

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
          title={titleConfig}
          tintColor={'#f33'}
          leftButton={leftButtonConfig} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  }
})
