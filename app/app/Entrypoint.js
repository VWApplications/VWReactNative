/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { View, StatusBar } from 'react-native';
import Navbar from './Compartilhados/components/Navbar';
// import NumerosRandomicos from './NumerosRandomicos';
// import FrasesDoDia from './FrasesDoDia';
// import Jokenpo from './Jokenpo';
import CatalogoDeItens from './Catalogo';

const App = () => (
  <View>
    <StatusBar hidden={false} backgroundColor="#CCC" />
    <Navbar />
    <CatalogoDeItens />
  </View>
);

export default App;
