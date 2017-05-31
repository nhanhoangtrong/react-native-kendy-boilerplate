import { Navigation } from 'react-native-navigation'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import TestScreen from './TestScreen'

export function registerScreens() {
    Navigation.registerComponent('main.HomeScreen', () => HomeScreen)
    Navigation.registerComponent('main.TestScreen', () => TestScreen)
}
