import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
import { connect } from 'react-redux'

class TestScreen extends Component {
    render() {
        const { navigator, username } = this.props
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello { username }</Text>
                <Button
                    title="Back"
                    onPress={() => {
                        navigator.pop()
                    }} />
                <Button
                    title="Logout"
                    onPress={() => {
                        navigator.pop()
                    }} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.auth.username,
})

export default connect(mapStateToProps)(TestScreen)
