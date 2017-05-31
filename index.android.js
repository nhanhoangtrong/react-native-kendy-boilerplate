import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/components/App'

import { Navigation } from 'react-native-navigation'
import { registerScreens } from './app/components/screens'

registerScreens()

Navigation.startSingleScreenApp({
    screen: {
        screen: 'main.HomeScreen',
        title: 'Home Screen',
        navigatorStyle: {},
        navigatorButtons: {},
    },
    animationType: 'slide-down',
    passProps: {},
})

// export default class ReactNativeKendyBoilerplate extends Component {
//   render() {
//     return (
//       <App />
//     );
//   }
// }
//
// AppRegistry.registerComponent('ReactNativeKendyBoilerplate', () => ReactNativeKendyBoilerplate);
