import { ATUALIZAR_ENTRADA, ATUALIZAR_OPERACAO, ATUALIZAR_RESULTADO } from './types';

export const atualizaValorAction = data => ({
  type: ATUALIZAR_ENTRADA,
  payload: data
});

export const atualizaOperacaoAction = data => ({
  type: ATUALIZAR_OPERACAO,
  payload: data
});

export const atualizaResultadoAction = data => ({
  type: ATUALIZAR_RESULTADO,
  payload: data
});
