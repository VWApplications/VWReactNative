import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  numero: {
    width: 140,
    height: 45,
    fontSize: 20,
    borderBottomWidth: 3,
    textAlign: 'center',
    borderBottomColor: 'green'
  },
  operacao: {
    marginTop: 15,
    marginBottom: 15
  },
  visor: {
    height: 80,
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#666'
  },
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },
  texto: {
    fontSize: 25,
    color: '#FFF'
  }
});
