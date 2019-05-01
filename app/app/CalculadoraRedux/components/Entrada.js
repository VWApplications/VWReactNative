import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Numero from './Numero';
import { styles } from '../styles';

class Entrada extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { numero1, numero2 } = this.props;

    return (
      <View style={styles.numeros}>
        <Numero num={numero1} chave='numero1' />
        <Numero num={numero2} chave='numero2' />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { calculadora } = state;

  return {
    numero1: calculadora.numero1,
    numero2: calculadora.numero2
  };
};

export default connect(mapStateToProps)(Entrada);
