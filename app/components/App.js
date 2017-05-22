import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
    View,
} from 'react-native'
import AppWithNavigationState from '../components/AppNavigator'
import store from '../store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}
