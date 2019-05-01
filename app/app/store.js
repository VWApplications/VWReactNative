import { combineReducers, createStore } from 'redux';
import CalculadoraRecuder from './CalculadoraRedux/reducers';

const reducers = combineReducers({
  calculadora: CalculadoraRecuder
});

const store = createStore(reducers);

export default store;
