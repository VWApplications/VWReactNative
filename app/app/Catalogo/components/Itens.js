/* eslint-disable camelcase */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item = (props) => {
  const { foto, titulo, valor, local_anuncio, data_publicacao } = props.item;

  return (
    <View style={styles.item}>
      <View style={styles.foto}>
        <Image source={{ uri: foto }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.textos}>
        <Text style={styles.titulo}>{ titulo }</Text>
        <Text>R$ { valor }</Text>
        <Text>Local: { local_anuncio }</Text>
        <Text>Data: { data_publicacao }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  textos: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  }
});

export default Item;
