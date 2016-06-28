import React from 'react'
import { StatusBar, View } from 'react-native'
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';

import About from '../views/about'
import Login from '../views/login'

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="about" title="About" component={About} initial={false} />
    <Scene key="login" title="Login" component={Login} initial={true}/>
  </Scene>
);

export default class AppRouter extends React.Component {
  render() {
    return (
      <View>
        <StatusBar
         backgroundColor="#ff3333"
         barStyle="light-content"
       />
      <Router scenes={scenes} />
      </View>
    )
  }
}
