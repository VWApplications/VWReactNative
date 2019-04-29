import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import pedra from '../imgs/pedra.png';
import papel from '../imgs/papel.png';
import tesoura from '../imgs/tesoura.png';

const Icone = (props) => {
  if (props.escolha === 'pedra') {
    return (
      <View style={styles.icone}>
        <Text style={styles.txtJogador}>{props.jogador}</Text>
        <Image source={pedra} />
      </View>
    );
  } else if (props.escolha === 'papel') {
    return (
      <View style={styles.icone}>
        <Text style={styles.txtJogador}>{props.jogador}</Text>
        <Image source={papel} />
      </View>
    );
  } else if (props.escolha === 'tesoura') {
    return (
      <View style={styles.icone}>
        <Text style={styles.txtJogador}>{props.jogador}</Text>
        <Image source={tesoura} />
      </View>
    );
  }

  return false;
};

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});

export default Icone;
