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
  },
  appNameText: {
    fontSize: 20,
  },
})

I18n.fallbacks = true;
I18n.translations = {
  en: {
    aboutTomato: 'About Tomato',
    back: 'Back',
    appName: 'Tomato',
    appInfo: 'Email: help@tomato.today',
    appCopyright: 'Copyright © 2016 tomato.today.',
  },
  zh: {
    aboutTomato: '关于番茄',
    back: '返回',
    appName: '番茄',
    appInfo: '邮箱: help@tomato.today',
    appCopyright: '版权 © 2016 tomato.today.',
  }
}
I18n.locale = 'zh'
