import React, { Component } from 'react'
import {
    Navigator
} from 'react-native'

export default class App extends Component {
    renderScene(route, navigator) {
        const Scene = route.scene
        return <Scene navigator={navigator}/>
    }
    render() {
        const { routes } = this.props
        return (
            <Navigator
                initialRoute={routes.home}
                renderScene={this.renderScene} />
        )
    }
}
