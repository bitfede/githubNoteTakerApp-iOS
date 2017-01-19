/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} from 'react-native';
var Main = require('./App/Components/Main')

export default class githubNotetaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', //the name we input
      isLoading: false,
      error: false
    }
  }
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
