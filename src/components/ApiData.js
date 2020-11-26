import React, {Component, useState} from 'react';
import '../css/ApiData.css'
import Coin from "./Coin"
import Chart1 from './Chart1'



const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'




class App extends Component {

    state = {
      apiLoaded: false,
      data: {} ,
      search: 'eth',
    }

  

     componentDidMount() {

        fetch(apiUrl) 
          .then(response => (response.json()))
          .then(dataFromApi => (
            this.setState({
              data: dataFromApi,
              apiLoaded: true 
              
            })
            
          ))
      }

     handleChange = (event) => 
      this.setState({
        search: event.target.value
      })
    
     


     filteredCoins = () => {
      let filterCoin = this.state.data.filter((coin)=>
       coin.id.toLowerCase().includes(this.state.search.toLowerCase()) || coin.symbol.toLowerCase().includes(this.state.search.toLowerCase()))
       return filterCoin;
     }


      render() {
        return (
          <div className="coin-app">

            {
              this.state.apiLoaded
                ?


                <div>

                  <div className="coin-search">
            <h1>Search a currency</h1>
            <form>
              <input 
              type="text"
               placeholder="search" 
               className="coin-input"
               onChange={this.handleChange}
               />
             </form>
             </div>
                   <div className="allCoins">
                     
                  {this.filteredCoins().map(character =>{
                    return(
     
                      <Coin 
                      id={character.id}
                      image={character.image}
                      symbol={character.symbol.toUpperCase()}
                      price={character.current_price}
                      volume={character.market_cap}
                      priceChange={character.price_change_percentage_24h}
                     />

                    )
                  })}
                     <Chart1 />
                  </div>

                </div>
                : 
                <p>SHOW SOME LOADING SPINNER</p>
            }
    
          </div>
        )
      }
    }
    
    
    export default App;


