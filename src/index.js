import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { WatchListContextProvider } from './Graph/context/watchListContext';


ReactDOM.render(
  <React.StrictMode>
    <WatchListContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </WatchListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


