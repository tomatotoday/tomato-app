import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image
} from 'react-native'

import {Actions} from 'react-native-router-flux'

import I18n from 'react-native-i18n'

import t from 'tcomb-form-native'

import NavigationBar from '../components/navigation-bar'

var Form = t.form.Form

const LoginForm = t.struct({
  email: t.String,
  password: t.String, // FIXME: replace to password input
})

const Props = {

}

export default class LoginView extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
  }

  onChange(value) {
    this.setState({value});
  }

  onLogin() {
    var value = this.refs.form.getValue();
    if (value) {
      alert('Transfer email and password to server to login.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Form
            ref="form"
            type={LoginForm}
            options={{}}
            style={styles.form}
          />
        <TouchableHighlight style={styles.button} onPress={ Actions.register } underlayColor='#ff0000'>
            <Text style={styles.buttonText}>{ I18n.t('save')}</Text>
          </TouchableHighlight>
          <Text onPress={ Actions.pop }>{ I18n.t('IDonotHaveAnAccount')}</Text>
          <Text>|</Text>
          <Text onPress={ Actions.forgotPassword}>{ I18n.t('forgotPassword')}</Text>
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
    marginLeft: 10,
    marginRight: 10,
  },
  form: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#ee3333',
    borderColor: '#ff4444',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
