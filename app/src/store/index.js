// Import
import { applyMiddleware, compose, createStore } from 'redux';

// Local import
// import reducer from 'src/store/reducer';
// import axios from 'src/store/axios';

// Code
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Enhancers
// const axiosEnhancer = applyMiddleware(axios);
const enhancers = compose(...devTools);

// Store
const store = createStore(reducer, enhancers);

// Export
export default store;
