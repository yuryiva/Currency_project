import React, { Component } from 'react'

import './newsBlock.css'


// url
const apiKey = "c5030163187e4eeeaedee411fe43f0e6";
const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = '2020-10-25';//new Date(year, month, day);


const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&sortBy=publishedAt&language
=en&apiKey=${apiKey}`


//apicall other way


class NewsBlock extends Component {

  state={
    titleOfNews: '',
    authorOfNews: '',    
    pictureOfNews:'',
    contentOfNews:'',
  }



  componentDidMount(){ 
    fetch (fullUrl)
    .then(urlNews =>  urlNews.json())  
    .then(newsApiJson => this.setState({
    titleOfNews: newsApiJson.articles[4].title,
    authorOfNews: newsApiJson.articles[4].author,
    pictureOfNews: newsApiJson.articles[4].urlToImage,
    contentOfNews: newsApiJson.articles[4].description
    }))
  }

  render() {
    return (
      <div>
        <p className='newsBlockTitle'>Title: {this.state.titleOfNews}</p>
        
        <img
            onFocus
            onMouseOver ={ () => this.state.authorOfNews}
                className='newsBlockImage' src={this.state.pictureOfNews} alt={this.state.titleOfNews} /> 
         {this.state.contentOfNews} 
         <p>author: {this.state.authorOfNews}</p>
      </div> 
    )
  }
}

export default NewsBlock;