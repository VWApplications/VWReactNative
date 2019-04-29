import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './style';

export default class FrasesDoDia extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Gerador de frases</Text>
        <Button
          title="Gerar frase"
        />
      </View>
    );
  }
}