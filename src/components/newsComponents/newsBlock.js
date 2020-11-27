import React, { Component } from 'react'

<<<<<<< HEAD
import './newsBlock.css'


// url
const apiKey = "c5030163187e4eeeaedee411fe43f0e6";
const newsApiOne =`http://newsapi.org/v2/everything?`;
const filterCategory = 'bitcoin';
const dateOfNews = '2020-10-25';//new Date(year, month, day);


const fullUrl = `${newsApiOne}q=${filterCategory}&to=${dateOfNews}&sortBy=publishedAt&language
=en&apiKey=${apiKey}`
=======
import fullUrl from './fullUrl'

import './newsBlock.css'



>>>>>>> d1b2f67b89a22b5a2ce27a808ac85d7d36980610


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
<<<<<<< HEAD
    titleOfNews: newsApiJson.articles[4].title,
    authorOfNews: newsApiJson.articles[4].author,
    pictureOfNews: newsApiJson.articles[4].urlToImage,
    contentOfNews: newsApiJson.articles[4].description
=======
    titleOfNews: newsApiJson.articles[1].title,
    authorOfNews: newsApiJson.articles[1].author,
    pictureOfNews: newsApiJson.articles[1].urlToImage,
    contentOfNews: newsApiJson.articles[1].description
>>>>>>> d1b2f67b89a22b5a2ce27a808ac85d7d36980610
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