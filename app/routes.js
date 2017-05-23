import HomeScreen from './components/screens/HomeScreen'
import TestScreen from './components/screens/TestScreen'
import LoginScreen from './components/screens/LoginScreen'

export const AppRoutes = {
    Home: {
        title: 'Home',
        screen: HomeScreen,
        // config: Navigator.screenConfigs.PushFromRight,
        // rightButton: {
        //     title: 'Noti',
        //     onPress(navigator) {
        //         console.log('press noti button')
        //     }
        // }
    },
    Test: {
        title: 'Test',
        screen: TestScreen,
        // config: Navigator.screenConfigs.FloatFromBottom,
        // rightButton: {
        //     title: 'Noti',
        //     onPress(navigator) {
        //         console.log('press noti button')
        //     }
        // }
    },
    Login: {
        title: 'Login',
        screen: LoginScreen,
    }
}
