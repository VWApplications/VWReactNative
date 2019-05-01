import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { atualizaValorAction } from '../actions';
import { styles } from '../styles';

class Numero extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  atualizaValor(chave, valor) {
    const obj = {};
    obj[chave] = valor;

    this.props.atualizaValorAction(obj);
  }

  render() {
    const { numero, chave } = this.props;

    return (
      <TextInput
        style={styles.numero}
        value={numero}
        onChangeText={valor => this.atualizaValor(chave, valor)}
      />
    );
  }
}

const mapDispatchToProps = { atualizaValorAction };

export default connect(null, mapDispatchToProps)(Numero);
