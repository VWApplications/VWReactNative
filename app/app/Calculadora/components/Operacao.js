/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Picker, StyleSheet } from 'react-native';

const Operacao = (props) => (
  <Picker
    style={styles.operacao}
    selectedValue={props.operacao}
    onValueChange={operacao => props.atualizaOperacao(operacao)}>
    <Picker.Item label='Soma' value='soma' />
    <Picker.Item label='Subtração' value='subtracao' />
    <Picker.Item label='Divisão' value='divisao' />
    <Picker.Item label='Multiplicação' value='multiplicacao' />
  </Picker>
);
export default Operacao;

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});
