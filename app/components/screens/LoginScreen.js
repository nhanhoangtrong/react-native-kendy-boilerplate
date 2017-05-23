import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import styles from '../../styles'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'LOGIN',
        headerLeft: null,
    }
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        const { dispatch } = this.props.navigation
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
                        dispatch({
                            type: 'Login',
                        })
                    }} />
            </View>
        )
    }
}
