import React from 'react'
import './App.css';
import ApiData from './components/ApiData'
import Navig from './components/Navig'
import TradeWithUs from './components/TradeWithUs'
import CryptoNews from './components/News';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <div className = 'navMenu'>
        <Navig/>
      </div>
      <div className = 'mainchart'>
     
      <ApiData/>
      </div>
      <TradeWithUs />
  



      {/* news block */}
      <CryptoNews />

     <Footer />

    </div>
  );
}

export default App;