import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './slices/index';
import './index.css';
import App from './App';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
);
