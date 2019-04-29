import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

export default class NumerosRandomicos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao React Native!</Text>
      </View>
    );
  }
}
