import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root'),
);
