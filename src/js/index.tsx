import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import { reducer } from 'js/data/reducers/index';

import { App } from 'js/containers/app';

const store = createStore(reducer, devToolsEnhancer({}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-content'),
);
