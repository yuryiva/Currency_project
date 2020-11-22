import React, { Component } from 'react'
import '../css/CryptoNews.css'

 class CryptoNews extends Component {
  render() {
    return (
      <div className='cryptoNews'>
        <div className='heading'>
          <h1>Cryptocurrency News</h1>
        </div>
        <div className='news'>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>
          <div className='newsBlock'> <p>some blocks of news inside</p></div>                    
        </div>
      </div>
    )
  }
}






export default CryptoNews;