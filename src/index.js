import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import products from './data/products';
const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4
};

ReactDOM.render(
  <App layout={cardsLayout} products={products} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
