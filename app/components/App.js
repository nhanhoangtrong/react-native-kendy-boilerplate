import { Navigation } from 'react-native-navigation'
import { registerScreens } from '../screens'

export default function() {
    // Registering screens before starting app
    registerScreens()

    Navigation.startSingleScreenApp({
        screen: {
            screen: 'myapp.LoginScreen',
            title: 'Login Screen',
            navigatorStyle: {},
            navigatorButtons: {},
        },
        animationType: 'slide-down',
        passProps: {
            username: 'kendy',
            password: 'aaa'
        },
    })
}
