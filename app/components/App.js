import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
    Navigator,
    TouchableHighlight,
    Text,

} from 'react-native'
import NavigationViewContainer from '../containers/NavigationViewContainer'
import { store, routes } from '../globals'
import styles from '../styles'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationViewContainer routes={routes}/>
            </Provider>
        )
    }
}
