import React, { Component } from 'react'

import fullUrl from './fullUrl'

import './newsBlock.css'





//apicall other way


class NewsBlock4 extends Component {

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
            <p className='newsBlockText'>{this.state.contentOfNews}</p> 
         <p>author: {this.state.authorOfNews}</p>
      </div> 
    )
  }
}

export default NewsBlock4;