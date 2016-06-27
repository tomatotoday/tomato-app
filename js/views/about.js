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
          centerTitle={I18n.t('about_tomato')}
          leftTitle={I18n.t('back')}
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

I18n.fallbacks = true;
I18n.translations = {
  en: {
    about_tomato: 'About Tomato',
    back: 'Back',
  },
  zh: {
    about_tomato: '关于番茄',
    back: '返回',
  }
}
I18n.locale = 'zh'
