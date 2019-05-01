import { ATUALIZAR_ENTRADA, ATUALIZAR_OPERACAO, ATUALIZAR_RESULTADO } from './types';

const initialState = {
  operacao: 'soma',
  numero1: '',
  numero2: '',
  resultado: ''
};

export default (state = initialState, action) => {
  let payload;
  let result;

  switch (action.type) {
    case ATUALIZAR_ENTRADA:
      payload = action.payload;

      result = {
        ...state,
      };

      result[Object.keys(payload)[0]] = payload[Object.keys(payload)[0]];

      return result;

    case ATUALIZAR_OPERACAO:
      payload = action.payload;

      return {
        ...state,
        operacao: payload,
      };

    case ATUALIZAR_RESULTADO:
      payload = action.payload;

      return {
        ...state,
        resultado: payload,
      };

    default:
      return state;
  }
};
