import React, { Component } from "react";
import Footer from "../../footer/Footer";
import NewsBox from "../NewsBox/NewsBox";
import SearchBlock from "../SearchBlock/SearchBlock";
import "./HeaderNews.css";
// import '../NewsBox/NewsBox.css'

////****КЛЮЧИ ДЛЯ API НЕ ПРЯТАЛ. ПРОСЬБА ПОЛЬЗОВАТЬСЯ БЕЗ ФАНАТИЗМА
// const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=8fbdc45f38704319840644466e6eaf15`;
// const newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=6083f7655296403dbe11b0814fa23f2f`;

export default class HeaderNews extends Component {
  state = {
    data: {},
    dataFromApiReceived: false,
    inputValue: "",
  };

  //   newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=8fbdc45f38704319840644466e6eaf15`;
  newsByDefaultApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=6083f7655296403dbe11b0814fa23f2f`;

  //   newsByRequestApi = `http://newsapi.org/v2/everything?q=${this.state.inputValue}&from=2020-12-09&sortBy=popularity&apiKey=8fbdc45f38704319840644466e6eaf15`
  newsByRequestApi = `http://newsapi.org/v2/everything?q=${this.state.inputValue}&from=2020-12-09&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f`;

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

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://newsapi.org/v2/everything?q=${this.state.inputValue}&from=2020-12-09&sortBy=popularity&apiKey=6083f7655296403dbe11b0814fa23f2f`
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

  render() {
    return (
      <div className="mainPart">
        {/* {console.log(this.state.data)} */}
        <SearchBlock
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
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

