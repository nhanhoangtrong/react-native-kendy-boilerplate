import HomeScreen from './components/screens/HomeScreen'
import TestScreen from './components/screens/TestScreen'
import {
    Navigator
} from 'react-native'

export default {
    home: {
        title: 'Home',
        scene: HomeScreen,
        config: Navigator.SceneConfigs.PushFromRight,
        rightButton: {
            title: 'Noti',
            onPress(navigator) {
                console.log('press noti button')
            }
        }
    },
    test: {
        title: 'Test',
        scene: TestScreen,
        config: Navigator.SceneConfigs.FloatFromBottom,
        rightButton: {
            title: 'Noti',
            onPress(navigator) {
                console.log('press noti button')
            }
        }
    }
}
