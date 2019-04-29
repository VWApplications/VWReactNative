/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao React Native!</Text>
      </View>
    );
  }
}
