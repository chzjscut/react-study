import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterTable from './views/examples/filter-table/index';
import RefsDemo from './views/examples/refs-demo/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FilterTable />
    <RefsDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
