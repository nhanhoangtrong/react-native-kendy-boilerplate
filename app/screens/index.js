import { Navigation } from 'react-native-navigation'

import { Provider } from 'react-redux'
import store from '../store'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import TestScreen from './home/TestScreen'

export function registerScreens() {
    Navigation.registerComponent('myapp.HomeScreen', () => HomeScreen, store, Provider)
    Navigation.registerComponent('myapp.LoginScreen', () => LoginScreen, store, Provider)

    Navigation.registerComponent('myapp.home.TestScreen', () => TestScreen, store, Provider)
}
