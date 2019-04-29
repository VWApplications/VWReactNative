import axios from 'axios';

export async function getItens() {
  const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
  return await axios.get(url);
}