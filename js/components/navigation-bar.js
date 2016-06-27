'use strict'

import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'react'

type Props = {
  centerTitle: string;
  leftTitle: any;
  rightTitle: any;
  leftHandler: any;
  rightHandler: any;
};


export default class NavBar extends Component {

  constructor(props: Props = {
    centerTitle: '',
    leftTitle: '',
    rightTitle: '',
    leftHandler: () => nil,
    rightHandler: () => nil,
  }) {
    super(props)
    this.state = {
      statusTintColor: '#ffffff',
      tintColor: '#ff3333',
      titleTintColor: '#ffffff',
      buttonTintColor: '#ffffff',
    }
  }

  render() {
    const rightButtonConfig = this.props.rightTitle === undefined ? {
      title: '',
    } : {
      title: this.props.rightTitle,
      tintColor: this.state.buttonTintColor,
      handler: this.props.rightHandler,
    }

    const leftButtonConfig = this.props.leftTitle === undefined ? {
      title: '',
    } : {
      title: this.props.leftTitle,
      tintColor: this.state.buttonTintColor,
      handler: this.props.leftHandler,
    }

    const titleConfig = {
      title: this.props.centerTitle,
      tintColor: this.state.titleTintColor,
    }

    return (
      <View style={ styles.container }>
        <NavigationBar
          title={ titleConfig }
          tintColor={this.state.tintColor }
          leftButton={ leftButtonConfig }
          rightButton={ rightButtonConfig }
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
