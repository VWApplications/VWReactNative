/* State e Props e modularização */

import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import Logo from './components/Logo';
import Resultados from './components/Resultados';
import Escolhas from './components/Escolhas';

export default class Jokenpo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaPC: '',
      resultado: ''
    };

    this.jokenpo = this.jokenpo.bind(this);
  }

  jokenpo(escolhaUsuario) {
    // É a mesma coisa de {escolhaUsuario: escolhaUsuario}
    this.setState({ escolhaUsuario });

    const numeroAleatorio = Math.floor(Math.random() * 3);
    const escolhasPC = ['pedra', 'papel', 'tesoura'];
    const escolhaPC = escolhasPC[numeroAleatorio];
    this.setState({ escolhaPC });

    let resultado = '';
    if (escolhaPC === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate!';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Venceu!';
      } else {
        resultado = 'Perdeu!';
      }
    } else if (escolhaPC === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Perdeu!';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Empate!';
      } else {
        resultado = 'Venceu!';
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (escolhaUsuario === 'pedra') {
        resultado = 'Venceu!';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Perdeu!';
      } else {
        resultado = 'Empate!';
      }
    }

    this.setState({ resultado });
  }

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Logo />
        <Escolhas jokenpo={this.jokenpo} />
        <Resultados state={this.state} />
      </View>
    );
  }
}
