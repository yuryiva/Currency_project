import React, { Component } from "react";
import Footer from "../../footer/Footer";
import NewsBox from "../NewsBox/NewsBox";
import SearchBlock from "../SearchBlock/SearchBlock";
import "./HeaderNews.css";
// import '../NewsBox/NewsBox.css'

////****КЛЮЧИ ДЛЯ API НЕ ПРЯТАЛ. ПРОСЬБА ПОЛЬЗОВАТЬСЯ БЕЗ ФАНАТИЗМА
// 2 const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=8fbdc45f38704319840644466e6eaf15`;
// 1 const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=6083f7655296403dbe11b0814fa23f2f`;

const d = new Date();
const curr_date = d.getDate();
const curr_month = d.getMonth() + 1;
const curr_year = d.getFullYear();
const todayIs = curr_year + "-" + curr_month + "-" + curr_date;

export default class HeaderNews extends Component {
  state = {
    data: {},
    dataFromApiReceived: false,
    inputValue: "",
    values: [
      { name: "Dash", id: 1 },
      { name: "Bitcoin", id: 2 },
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

  newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=6083f7655296403dbe11b0814fa23f2f`;

  newsByRequestApi = `http://newsapi.org/v2/everything?q=${this.state.inputValue}&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f`;
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
      `http://newsapi.org/v2/everything?q=${this.state.inputValue}&from=${todayIs}&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f`

      // http://newsapi.org/v2/everything?q=dollar&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f
      // http://newsapi.org/v2/top-headlines?q=dollar&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f

      // 6083f7655296403dbe11b0814fa23f2f
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
        `http://newsapi.org/v2/everything?q=${this.state.topicChosen}&from=${todayIs}&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f`
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
          <h1>LOADING...</h1>
        )}
      </div>
    );
  }
}
