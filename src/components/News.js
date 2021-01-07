import React, { useContext } from 'react';
import NewsBlockApi from './newsComponents/newsBlockApi';
import { WatchListContext } from "../Graph/context/watchListContext";


import '../css/CryptoNews.css';

 const CryptoNews = () => {

  const { navLinkOpen } = useContext(WatchListContext);
 
    return (
      <div className= { navLinkOpen ? "cryptoNews_none" : 'cryptoNews'}>

        <div className='heading'>
          <h1 style={{color:'ivory'}}>Cryptocurrency News</h1>
        </div>

        <div >
          <div> <NewsBlockApi /> </div> 
                
        </div>

      </div>
    )
  
}






export default CryptoNews;