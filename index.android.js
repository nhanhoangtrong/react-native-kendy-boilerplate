import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/components/App'

export default class ReactNativeKendyBoilerplate extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ReactNativeKendyBoilerplate', () => ReactNativeKendyBoilerplate);
