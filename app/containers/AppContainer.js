import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from '../components/App'
import { store, routes } from '../globals'

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App routes={routes} />
            </Provider>
        )
    }
}
