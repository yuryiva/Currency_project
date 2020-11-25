import React from 'react'
import './App.css';

import Chart1 from './components/Chart1'
import Navig from './components/Navig'
import TradeWithUs from './components/TradeWithUs'
import CryptoNews from './components/News';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <div className = 'navMenu'>
        <Navig/>
      </div>
      <div className = 'mainchart'>
      <Chart1 />
      </div>
      <TradeWithUs />




      {/* news block */}
      <CryptoNews />

     <Footer />

    </div>
  );
}

export default App;