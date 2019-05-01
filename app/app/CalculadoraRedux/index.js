/* Redux */

import React, { Component } from 'react';
import { View } from 'react-native';
import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';

class CalculadoraRedux extends Component {
  static navigationOptions = {
    title: 'Calculadora'
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado />
        <Painel />
      </View>
    );
  }
}

export default CalculadoraRedux;
