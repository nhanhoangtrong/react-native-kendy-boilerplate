import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

export default class TestScreen extends Component {
    render() {
        const { pop } = this.props.navigator
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is test screen</Text>
                <Button
                    title="Back"
                    onPress={() => {
                        pop()
                    }} />
                <Button
                    title="Logout"
                    onPress={() => {
                        pop()
                    }} />
            </View>
        )
    }
}
