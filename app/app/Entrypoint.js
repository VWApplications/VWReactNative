/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './router';
import store from './store';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
