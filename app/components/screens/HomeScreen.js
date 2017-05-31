import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        const { push } = this.props.navigator
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>Hello World</Text>
                <Button
                    title="Test Screen"
                    onPress={() => {
                        console.log('pushing')
                        push({
                            screen: 'main.TestScreen',
                            title: 'TestScreen',
                        })
                    }}/>
            </View>
        )
    }
}
