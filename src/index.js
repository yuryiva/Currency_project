import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { WatchListContextProvider } from './Graph/context/watchListContext';
import { GlobalStyles } from './global-styles';


ReactDOM.render(
  <React.StrictMode>
    <WatchListContextProvider>
    <BrowserRouter>
    <GlobalStyles />
      <App />
    </BrowserRouter>
    </WatchListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


