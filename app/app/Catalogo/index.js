/* API REST */

import React, { Component } from 'react';
import { View } from 'react-native';
import { getItens } from './api';
import ListaItens from './components/ListaItens';

export default class CatalogoDeItens extends Component {
  static navigationOptions = {
    title: 'Catalogo de Itens'
  }

  constructor(props) {
    super(props);

    this.state = {
      itens: []
    };
  }

  componentWillMount() {
    getItens()
      .then(response => {
        this.setState({ itens: response.data });
      })
      .catch(() => console.log('Erro ao buscar os dados'));
  }

  render() {
    return (
      <View>
        <ListaItens elements={this.state} />
      </View>
    );
  }
}
