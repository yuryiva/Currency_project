import React, { Component } from "react";
import Footer from "../../footer/Footer";
import NewsBox from "../NewsBox/NewsBox";
import SearchBlock from "../SearchBlock/SearchBlock";
import "./HeaderNews.css";
// import '../NewsBox/NewsBox.css'

////****КЛЮЧИ ДЛЯ API НЕ ПРЯТАЛ. ПРОСЬБА ПОЛЬЗОВАТЬСЯ БЕЗ ФАНАТИЗМА
// 2 const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=8fbdc45f38704319840644466e6eaf15`;
// 1 const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=6083f7655296403dbe11b0814fa23f2f`;

export default class HeaderNews extends Component {
  state = {
    data: {},
    dataFromApiReceived: false,
    inputValue: "",
    values: [
      { name: "Bitcoin", id: 1 },
      { name: "Dash", id: 2 },
      { name: "IOTA", id: 3 },
      { name: "NEO", id: 4 },
      { name: "Litecoin", id: 5 },
      { name: "Ripple", id: 6 },
      { name: "Zcash", id: 7 },
      { name: "EOS", id: 8 },
      { name: "TRON", id: 9 },
      { name: "Binance", id: 10 },
      { name: "Bittrex", id: 11 },
      { name: "Coinbase", id: 12 },
      { name: "IDEX", id: 13 },
      { name: "Poloniex", id: 14 },
      { name: "Kraken", id: 15 },
      { name: "Huobi", id: 16 },
    ],

    topicChosen: "",
  };

  newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_NEWS_KEY}`;

  newsByRequestApi = `http://newsapi.org/v2/everything?q=${
    this.state.inputValue
  }&from=${new Date()}&sortBy=popularity&apiKey=8fbdc45f38704319840644466e6eaf15`;
  // ${process.env.REACT_APP_API_NEWS_KEY}`

  componentDidMount() {
    fetch(this.newsByDefaultApi)
      .then((response) => response.json())
      .then((dataFromApi) =>
        this.setState({
          data: dataFromApi.articles,
          dataFromApiReceived: true,
        })
      );

    this.setState({
      dataFromApiReceived: false,
    });
  }

  handleKeyWordChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleKeyWordSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://newsapi.org/v2/everything?q=${
        this.state.inputValue
      }&from=${new Date()}&sortBy=popularity&apiKey=8fbdc45f38704319840644466e6eaf15`

      // ${process.env.REACT_APP_API_NEWS_KEY}`
    )
      .then((response) => response.json())
      .then((dataFromApi) =>
        this.setState({
          data: dataFromApi.articles,
          dataFromApiReceived: true,
          inputValue: "",
        })
      );
    this.setState({
      dataFromApiReceived: false,
    });
  };

  handleTopicChoise = (event) => {
    this.setState({
      topicChosen: event.target.value,
    });

    setTimeout(() => {
      fetch(
        `http://newsapi.org/v2/everything?q=${
          this.state.topicChosen
        }&from=${new Date()}&sortBy=popularity&apiKey=8fbdc45f38704319840644466e6eaf15`
      )
        .then((response) => response.json())
        .then((dataFromApi) =>
          this.setState({
            data: dataFromApi.articles,
            dataFromApiReceived: true,
          })
        );

      this.setState({
        dataFromApiReceived: false,
      });
    }, 1);
  };

  render() {
    return (
      <div className="mainPart">
        {/* {console.log(this.state.data)} */}
        <SearchBlock
          handleTopicChoise={this.handleTopicChoise}
          topics={this.state.values.map((object) => (
            <option key={object.id} value={object.name}>
              {object.name}
            </option>
          ))}
          handleKeyWordChange={this.handleKeyWordChange}
          handleKeyWordSubmit={this.handleKeyWordSubmit}
          value={this.state.inputValue}
        />

        {this.state.dataFromApiReceived === true ? (
          this.state.data.map((object, index) => (
            <NewsBox
              key={index}
              url={object.url}
              urlToImage={object.urlToImage}
              title={object.title}
              author={object.author}
              description={object.description}
            />
          ))
        ) : (
          <h1>LOADING</h1>
        )}
      </div>
    );
  }
}
