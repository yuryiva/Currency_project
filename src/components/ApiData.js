import React, {Component, useState} from 'react';
import axios from 'axios';
import Coin from "./Coin"


const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'




class App extends Component {

    state = {
      apiLoaded: false,
      data: {} ,
      search: ''
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

    //  showBtc = () =>{
    //    let btcInfo = this.state.data.filter((coin)=> coin.id == "bitcoin")
    //    console.log(btcInfo[0])
    //    return btcInfo[0];
    //  }

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
                  {this.filteredCoins().map(character =>{
                    return(
                      <Coin 
                      id={character.id}
                      image={character.image}
                      symbol={character.symbol.toUpperCase()}
                     />
                    )
                  })}

                  {/* {
                    
                    this.state.data.map((character, i) => (
                      <Coin 
                       id= {character.id}
                       image={character.image}
                       symbol={character.symbol.toUpperCase()}
                      />
                    ))
                  } */}

                </div>
                : 
                <p>SHOW SOME LOADING SPINNER</p>
            }
    
          </div>
        )
      }
    }
    
    
    export default App;


