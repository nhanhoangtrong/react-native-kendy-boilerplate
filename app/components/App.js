import React, { Component } from 'react'
import {
    Navigator,
    TouchableHighlight,
    Text,

} from 'react-native'
import styles from '../styles'

export default class App extends Component {
    renderScene(route, navigator) {
        const Scene = route.scene
        return <Scene navigator={navigator}/>
    }
    configureScene(route, routeStack) {
        return route.config
    }
    render() {
        const { routes } = this.props
        const NavigationBarRouteMapper = {
            LeftButton(route, navigator, index, navState) {
                if (index > 0) {
                    return (
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => { if (index > 0) { navigator.pop() } }}>
                            <Text style={styles.navBarTextLeft}>Back</Text>
                        </TouchableHighlight>
                    )
                }
                return null
            },
            RightButton(route, navigator, index, navState) {
                if (route.rightButton) {
                    return (
                        <TouchableHighlight
                            onPress={() => { route.rightButton.onPress(navigator) } }>
                            <Text style={styles.navBarTextRight}>{route.rightButton.title || 'Right Button'}</Text>
                        </TouchableHighlight>
                    )
                }
                return null
            },
            Title(route, navigator, index, navState) {
                return <Text style={styles.navBarTitle}>My App Title</Text>
            }
        }
        return (
            <Navigator
                initialRoute={routes.home}
                renderScene={this.renderScene}
                configureScene={this.configureScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navBar}
                        routeMapper={NavigationBarRouteMapper} />
                } />
        )
    }
}
