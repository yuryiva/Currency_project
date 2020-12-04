import React, { Component } from 'react';
import NewsBlockApi from './newsComponents/newsBlockApi';


import '../css/CryptoNews.css';

 class CryptoNews extends Component {
  render() {
    return (
      <div className='cryptoNews'>

        <div className='heading'>
          <h1 style={{color:'ivory'}}>Cryptocurrency News</h1>
        </div>

        <div className=''>
          <div> <NewsBlockApi /> </div> 
                
        </div>

      </div>
    )
  }
}






export default CryptoNews;