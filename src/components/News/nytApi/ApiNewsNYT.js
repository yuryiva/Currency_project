import React, { Component } from 'react';
import apiNYT from '../newsUrl';
import NewsBlock from '../../newsComponents/newsBlock'


 class ApiNewsNYT extends Component {
  state = {
    getData: '',
    newsData: [],
    status: "error",
  }



  componentDidMount() {
    fetch(apiNYT)

    .then (news => news.json())
      .then(newsJson => this.setState({
        newsData: newsJson.results,
        getData: true,
        status: newsJson.status,
      }))}

 array = this.state.newsData

  

  render() {
    console.log(Object.values(this.array))
    return (
      <div>
        {this.state.getData ?          
        
        `${this.state.status==='error'? 
        <h1>Error</h1>
        :
           <div>{this.array}</div>
        // this.state.newsData.map((results, index) => (<NewsBlock  
        //   key={index}
        //   title={results.title}
        //   image={results.urlToImage}
        //   description={results.description}
        //   author={results.author} />
        //   ))
         }`



        :<p>Loading...</p> 
      }
      </div>
    )
  }
}

export default ApiNewsNYT;