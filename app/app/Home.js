import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import Navbar from './Compartilhados/components/Navbar';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor="#CCC" />
        <Navbar />
        <Text>ENTREIII</Text>
      </View>
    );
  }
}

export default HomeScreen;
