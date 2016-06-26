import React from 'react'
import { StatusBar, View } from 'react-native'
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';

import About from '../components/about'

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="about" title="About" component={About} initial={true} />
  </Scene>
);

export default class AppRouter extends React.Component {
  render() {
    return (
      <View>
        <StatusBar
         backgroundColor="#ff3333"
         barStyle="default"
       />
      <Router scenes={scenes} />
      </View>
    )
  }
}
