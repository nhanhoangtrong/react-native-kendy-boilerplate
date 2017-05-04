import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './app/containers/AppContainer'

export default class ReactNativeKendyBoilerplate extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeKendyBoilerplate', () => ReactNativeKendyBoilerplate);
