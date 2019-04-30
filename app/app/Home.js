import React, { Component } from 'react';
import { View, StatusBar, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Página Principal'
  }

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor="#CCC" />
        <Button
          title="Ir para o app números randomicos"
          onPress={() => this.props.navigation.navigate('Numeros', { valorMaximo: 100 })}
        />
        <Button
          title="Ir para o app frases do dia"
          onPress={() => this.props.navigation.navigate('Frases', { titulo: 'Frases do Dia' })}
        />
        <Button
          title="Ir para o app jokenPO"
          onPress={() => this.props.navigation.navigate('JokenPO')}
        />
        <Button
          title="Ir para o app catalogo de itens"
          onPress={() => this.props.navigation.navigate('Catalogo')}
        />
      </View>
    );
  }
}

export default HomeScreen;
