import React from 'react';
import { ScrollView } from 'react-native';
import Item from './Itens';

const ListaItens = (props) => {
  const { itens } = props.elements;

  return (
    <ScrollView>
      {itens.map((item) => (
        <Item key={item.titulo} item={item} />
      ))}
    </ScrollView>
  );
};

export default ListaItens;
