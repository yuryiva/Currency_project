import React, { Component } from 'react';
import NewsBlock from './newsComponents/newsBlock';

import '../css/CryptoNews.css';

 class CryptoNews extends Component {
  render() {
    return (
      <div className='cryptoNews'>

        <div className='heading'>
          <h1>Cryptocurrency News</h1>
        </div>

        <div className='news'>
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock /> </div> 
          <div className='newsBlock'> <NewsBlock /> </div>                  
        </div>

      </div>
    )
  }
}






export default CryptoNews;