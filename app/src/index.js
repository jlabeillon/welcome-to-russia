// Import
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// Local import
import App from 'src/components/App';
// import store from 'src/store';

// Code
document.addEventListener('DOMContentLoaded', () => {
  render(
    // <Provider store={store}>
      <App />
    // </Provider>
    , document.getElementById('root')
  );
});
