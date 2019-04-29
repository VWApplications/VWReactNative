import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const EscolhasComponent = (props) => (
  <View style={styles.painelAcoes}>
    <View style={styles.btnEscolhas}>
      <Button title="PEDRA" onPress={() => props.jokenpo('pedra')} />
    </View>
    <View style={styles.btnEscolhas}>
      <Button title="PAPEL" onPress={() => props.jokenpo('papel')} />
    </View>
    <View style={styles.btnEscolhas}>
      <Button title="TESOURA" onPress={() => props.jokenpo('tesoura')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  btnEscolhas: {
    width: 90,
    marginTop: 5
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default EscolhasComponent;
