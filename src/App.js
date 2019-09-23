import React from 'react';
import { Provider } from 'react-redux';

import Main from 'pages/Main';

import GlobalStyle from 'styles/global';

import 'config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
