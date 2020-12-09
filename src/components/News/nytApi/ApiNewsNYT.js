import React, { Component } from 'react';
import apiNYT from '../newsUrl';
import NewsBlock from '../../newsComponents/newsBlock'
import '../news-page.css'

 class ApiNewsNYT extends Component {
  state = {
    getData: '',
    newsData: [],
    status: "error",
  }



  componentDidMount() {
    fetch(apiNYT)

    .then (news => (news.json()))
      .then(newsJson => this.setState({
        newsData: newsJson.results[2],
        getData: true,
        status: newsJson.status,
      }))}

  array(title, ) = this.state.newsData

  

  render() {
    return (
      <div>

     { this.state.newsData.title}<h1>hello</h1>
{/* 
        {this.state.getData ?          
        
        `${this.state.status==='error'? 
        <h1>Error</h1>
        :
        this.state.newsData.map((result, index) => (<div>  
          key={index}
          title={result.title}
          </div>
          ))
         }`



        :<p>Loading...</p> 
      } */}
      </div>
    )
  }
}

export default ApiNewsNYT;