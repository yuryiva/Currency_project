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
    winner: false
  }



  componentDidMount() {

    fetch(apiUrl)
      .then(response => (response.json()))
      .then(dataFromApi => {

        let dataWithNewProperties = dataFromApi.map(coin => ({...coin, show:false}))
        

        this.setState({
          data: dataWithNewProperties,
          apiLoaded: true
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

                {this.filteredCoins().map((character, index) => {
                  return (
                    <div>
                      <div className={character.id} onClick={() => this.chooseCoin(index)}>
                        <Coin
                          id={character.id}
                          image={character.image}
                          symbol={character.symbol.toUpperCase()}
                        />
                      </div>

                      <div style={{ display: this.state.data[index].show ? 'block' : 'none' }}   >
                        <CoinMoreStuff
                          price={character.current_price}
                          volume={character.market_cap}
                          priceChange={character.price_change_percentage_24h}
                        />
                      </div>

                    </div>

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

