import React from 'react';
import { View } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = () => (
    <View>
      <Entrada />
      <Operacao />
      <Comando />
    </View>
);

export default Painel;
