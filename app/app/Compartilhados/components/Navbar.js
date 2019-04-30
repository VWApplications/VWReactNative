import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Navbar extends Component {

  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.texto}>Aplicativos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 50
  },
  texto: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});

export default Navbar;

