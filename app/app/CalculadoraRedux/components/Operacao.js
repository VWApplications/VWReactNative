/* eslint-disable react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { atualizaOperacaoAction } from '../actions';
import { styles } from '../styles';

class Operacao extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { operacao } = this.props;

    return (
      <Picker
        style={styles.operacao}
        selectedValue={operacao}
        onValueChange={value => this.props.atualizaOperacaoAction(value)}>
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
        <Picker.Item label='Divisão' value='divisao' />
        <Picker.Item label='Multiplicação' value='multiplicacao' />
      </Picker>
    );
  }
}

const mapStateToProps = state => {
  const { calculadora } = state;

  return {
    operacao: calculadora.operacao
  };
};

const mapDispatchToProps = { atualizaOperacaoAction };

export default connect(mapStateToProps, mapDispatchToProps)(Operacao);
