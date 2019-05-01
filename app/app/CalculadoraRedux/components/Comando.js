import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { atualizaResultadoAction } from '../actions';

class Comando extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  calcular() {
    const { numero1, numero2, operacao } = this.props;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let resultado = 0;

    switch (operacao) {
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

    this.props.atualizaResultadoAction(resultado.toString());
  }

  render() {
    return (
      <Button title="Calcular" onPress={() => this.calcular()} />
    );
  }
}

const mapStateToProps = state => {
  const { calculadora } = state;

  return {
    operacao: calculadora.operacao,
    numero1: calculadora.numero1,
    numero2: calculadora.numero2
  };
};

const mapDispatchToProps = { atualizaResultadoAction };

export default connect(mapStateToProps, mapDispatchToProps)(Comando);
