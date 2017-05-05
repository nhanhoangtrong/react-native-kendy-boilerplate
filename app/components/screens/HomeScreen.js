import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
import { routes } from '../../globals'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>Hello World</Text>
                <Button
                    title="Test Screen"
                    onPress={() => {
                        const navigator = this.props.navigator
                        navigator.push(routes.test)
                    }}/>
            </View>
        )
    }
}
