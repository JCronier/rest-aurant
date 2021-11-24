// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Components
import App from './App';

// Context API
import ViewProvider from "./providers/ViewProvider";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ViewProvider>
      <App />
    </ViewProvider>
  </Provider>,
  document.getElementById('root')
);