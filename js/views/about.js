import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import I18n from 'react-native-i18n'

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
          centerTitle={I18n.t('aboutTomato')}
          leftTitle={I18n.t('back')}
          leftHandler={() => alert('hello')}
          />
        <View style={styles.wrapper}>
          <View style={styles.appNameView}>
            <Text style={styles.appNameText}>{I18n.t('appName')}</Text>
            <Text style={styles.appVersionText}>v0.1.0</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
  },
  appNameView: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  appNameText: {
    fontSize: 20,
  },
  appVersionText: {
    fontSize: 13,
  },
})
