import React from 'react'
import { StatusBar, View } from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import I18n from 'react-native-i18n'

import About from '../views/about'
import Login from '../views/login'
import Register from '../views/register'
import ForgotPassword from '../views/forgot-password'

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.debug("ACTION:", action);
        return defaultReducer(state, action);
    }
};

const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: '#ffffff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};



export default class AppRouter extends React.Component {
  render() {
    const scenes = Actions.create(
      <Scene key="modal" component={Modal} >
        <Scene key="root" hideNavBar={false}>
          <Scene key="about" title="About" component={About} initial={false} />
          <Scene key="login" title={I18n.t('login')} component={Login} initial={false} />
          <Scene key="register" title={I18n.t('register')} component={Register} initial={true}/>
          <Scene key="forgotPassword" title={I18n.t('forgotPassword')} component={ForgotPassword} initial={false}/>
        </Scene>
      </Scene>
    )
    return (
      <Router scenes={scenes} createReducer={reducerCreate} getSceneStyle={getSceneStyle}/>
    )
  }
}
