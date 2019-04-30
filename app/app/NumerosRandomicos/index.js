/* Noções Básicas de React */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './style';

export default class NumerosRandomicos extends Component {
  static navigationOptions = {
    title: 'Gerador de Números Randomicos'
  }


  geraNumeroAleatorio(valorMaximo) {
    const numeroAleatorio = Math.floor(Math.random() * valorMaximo);
    // eslint-disable-next-line no-undef
    alert(numeroAleatorio);
  }

  render() {
    const { navigation } = this.props;
    const valorMaximo = navigation.getParam('valorMaximo', 10);
    console.log(valorMaximo);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Gerador de Números Randômicos ({valorMaximo})</Text>
        <Button
          title="Gerar um número randômico"
          onPress={() => this.geraNumeroAleatorio(valorMaximo)}
        />
      </View>
    );
  }
}
