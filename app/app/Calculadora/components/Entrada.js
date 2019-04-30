import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default (props) => {
  const { num1, num2, atualizaValor } = props;

  return (
    <View style={styles.numeros}>
      <Numero num={num1} atualizaValor={atualizaValor} chave='numero1' />
      <Numero num={num2} atualizaValor={atualizaValor} chave='numero2' />
    </View>
  );
};

const styles = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
