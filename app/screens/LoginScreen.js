import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'
import styles from '../styles'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: (props.username || ''),
            password: (props.password || ''),
        }
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput style={styles.inputTextDefault}
                    onChangeText={(text) => { this.setState({username: text})}}
                    autoCapitalize="none"
                    placeholder="Username"
                    value={this.state.username} />
                <TextInput style={styles.inputTextDefault}
                    onChangeText={(text) => { this.setState({password: text})}}
                    autoCapitalize="none"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password} />
                <Button title="Login or Register" onPress={() => {

                        // TODO: Verify login
                        this.props.navigator.resetTo({
                            screen: 'myapp.HomeScreen',
                            title: 'Home Screen',
                            passProps: {
                                username: this.state.username,
                                authToken: this.state.password,
                            }
                        })
                    }} />
            </View>
        )
    }
}
