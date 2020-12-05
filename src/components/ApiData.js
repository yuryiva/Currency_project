import React, { Component, useState } from 'react';
import '../css/ApiData.css'
import Coin from "./Coin"
import Chart1 from './Chart1'
import CoinMoreStuff from './CoinMoreStuff'



const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'




class App extends Component {

  state = {
    apiLoaded: false,
    data: {},
    search: 'eth',
    winner: false,
  }



  componentDidMount() {

    fetch(apiUrl)
      .then(response => (response.json()))
      .then(dataFromApi => {

        let dataWithNewProperties = dataFromApi.map(coin => ({...coin, show:false}))
        

        this.setState({
          data: dataWithNewProperties,
          apiLoaded: true,
        })
        
      })
  }

  handleChange = (event) =>
    this.setState({
      search: event.target.value
    })



  filteredCoins = () => {
    let filterCoin = this.state.data.filter((coin) =>
      coin.id.toLowerCase().includes(this.state.search.toLowerCase()) || coin.symbol.toLowerCase().includes(this.state.search.toLowerCase()))
    return filterCoin;
  }


  chooseCoin = (index) => {
    let arrayOfCoinsToShow = [...this.state.data]

    if(arrayOfCoinsToShow[index].show){
      arrayOfCoinsToShow[index].show = !this.state.data[index].show 
    }else{
    for (let i = 0; i<arrayOfCoinsToShow.length; i++){
      arrayOfCoinsToShow[i].show = false;
}
arrayOfCoinsToShow[index].show = !this.state.data[index].show
}


    this.setState({
        data: arrayOfCoinsToShow
       })
  }


  render() {
    return (
      <div className="coin-app">

        {
          this.state.apiLoaded
            ?


            <div>

              <div className="coin-search">
                <form>
                  <input
                    type="text"
                    placeholder="search"
                    className="coin-input"
                    onChange={this.handleChange}
                  />
                </form>
              </div>
              <div className="allStufs">
              <div className="allCoins">
              
                {this.filteredCoins().map((character, index) => {
                  
                  return (
                    
                      <div className="coinFullInfo">
                      <div className={character.id} onClick={() => this.chooseCoin(index)}>
                          
                        <Coin
                          id={character.id}
                          image={character.image}
                          symbol={character.symbol.toUpperCase()}
                        />
                      </div>
                      </div>
                  )
                })}                
              </div>
              <div className='testDiv'>
              {this.filteredCoins().map((character, index) => {
                  
                  return (
                    <div style={{ display: this.state.data[index].show ? 'block' : 'none' }}   >
                    <div className="moreData">
                 
                 { character.price_change_percentage_24h ? (
                  
                   <CoinMoreStuff
                   price={character.current_price}
                   volume={character.market_cap}
                   priceChange =  {character.price_change_percentage_24h}
                 />
                 ) :(
                 <CoinMoreStuff
                   price={character.current_price}
                   volume={character.market_cap}
                   priceChange =  {0}
                 />)
                 
         }
          </div>  
               <div className="chartContainer">
                        <Chart1
                         data={ [
                                { Date: character.last_updated, Price_$: character.current_price },]}
                                 /> 
               </div>
                    
               </div>
                    )
                  })}  
                  </div>              
            </div>
            </div>
            :
            <div>
            <i className="fa fa-spinner fa-spin" /> Loading...
          </div>
        }

      </div>
    )
  }
}


export default App;

