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

  onPress() {
    var value = this.refs.form.getValue();
    if (value) {
      alert('Transfer email and password to server to login.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          centerTitle={I18n.t('login')}
          leftTitle={I18n.t('back')}
          leftHandler={() => alert('Should Redirect to register page.')}
          />
        <View style={styles.wrapper}>
          <Form
            ref="form"
            type={LoginForm}
            options={{}}
            style={styles.form}
          />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
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
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
  },
  form: {
    flex: 1,
  },
  button: {
    height: 36,
    backgroundColor: '#ff3333',
    borderColor: '#ff4444',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
