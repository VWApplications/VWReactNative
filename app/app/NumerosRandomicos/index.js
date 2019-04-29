/* Noções Básicas de React */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './style';

export default class NumerosRandomicos extends Component {

  geraNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    // eslint-disable-next-line no-undef
    alert(numeroAleatorio);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Gerador de Números Randômicos</Text>
        <Button
          title="Gerar um número randômico"
          onPress={this.geraNumeroAleatorio}
        />
      </View>
    );
  }
}
