/* Formulário */

import React, { Component } from 'react';
import { View } from 'react-native';
import Topo from './components/Topo';
import Resultado from './components/Resultado';
import Painel from './components/Painel';

export default class Calculadora extends Component {
  static navigationOptions = {
    title: 'Calculadora'
  }

  constructor(props) {
    super(props);

    this.state = {
      operacao: 'soma',
      numero1: '',
      numero2: '',
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  atualizaValor(chave, valor) {
    const obj = {};
    obj[chave] = valor;
    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  calcular() {
    const num1 = parseFloat(this.state.numero1);
    const num2 = parseFloat(this.state.numero2);
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = num1 + num2;
        break;
      case 'subtracao':
        resultado = num1 - num2;
        break;
      case 'divisao':
        resultado = num1 / num2;
        break;
      case 'multiplicacao':
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    this.setState({ resultado: resultado.toString() });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          numero1={this.state.numero1}
          numero2={this.state.numero2}
          atualizaValor={this.atualizaValor}
          operacao={this.state.operacao}
          atualizaOperacao={this.atualizaOperacao}
          calcular={this.calcular}
        />
      </View>
    );
  }
}
