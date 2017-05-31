import HomeScreen from './components/screens/HomeScreen'
import TestScreen from './components/screens/TestScreen'
import LoginScreen from './components/screens/LoginScreen'

export const AppRoutes = {
    Home: {
        key: 'Home',
        title: 'Home',
        screen: HomeScreen,
    },
    Test: {
        key: 'Test',
        title: 'Test',
        screen: TestScreen,
    },
    Login: {
        key: 'Login',
        title: 'Login',
        screen: LoginScreen,
    }
}
