import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>Hello World</Text>
                <Button
                    title="Test Screen"
                    onPress={() => {
                        navigate('Test')
                    }}/>
            </View>
        )
    }
}
