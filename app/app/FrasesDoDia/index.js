/* Design */

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import { phrases } from './phrases';
import logo from './imgs/logo.png';

export default class FrasesDoDia extends Component {

  gerarNovaFrase() {
    const numeroAleatorio = Math.floor(Math.random() * 5);
    Alert.alert(phrases[numeroAleatorio]);
  }

  render() {
    const { container, imagem, botao, textoBotao } = styles;

    return (
      <View style={container}>
        <Image style={imagem} source={logo} />
        <TouchableOpacity style={botao} onPress={this.gerarNovaFrase}>
          <Text style={textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
