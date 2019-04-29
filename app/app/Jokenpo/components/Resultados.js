import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icone from './Icone';

const Resultados = (props) => {
  const { escolhaPC, escolhaUsuario, resultado } = props.state;

  return (
    <View style={styles.palco}>
      <Text style={styles.txtResultado}>{ resultado }</Text>
      <Icone escolha={escolhaPC} jogador='Computador' />
      <Icone escolha={escolhaUsuario} jogador='Você' />
    </View>
  );
};

const styles = StyleSheet.create({
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

export default Resultados;
