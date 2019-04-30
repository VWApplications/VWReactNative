import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default (props) => (
  <TextInput
    style={styles.numero}
    value={props.num}
    onChangeText={(valor) => props.atualizaValor(props.chave, valor)}
  />
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 45,
    fontSize: 20,
    borderBottomWidth: 3,
    textAlign: 'center',
    borderBottomColor: 'green'
  }
});
