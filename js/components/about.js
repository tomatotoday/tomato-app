import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

export default class AboutView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>About us</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
  }
})
