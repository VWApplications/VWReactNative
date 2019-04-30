import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Resultado = (props) => (
  <TextInput
    style={styles.visor}
    placeholder='Resultado'
    editable={false}
    value={props.resultado}
  />
);
export default Resultado;

const styles = StyleSheet.create({
  visor: {
    height: 80,
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#666'
  }
});

