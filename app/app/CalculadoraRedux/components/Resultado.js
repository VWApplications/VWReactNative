import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles';

class Resultado extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { resultado } = this.props;

    return (
      <TextInput
        style={styles.visor}
        placeholder='Resultado'
        editable={false}
        value={resultado}
      />
    );
  }
}

const mapStateToProps = state => {
  const { calculadora } = state;

  return {
    resultado: calculadora.resultado
  };
};

export default connect(mapStateToProps)(Resultado);
