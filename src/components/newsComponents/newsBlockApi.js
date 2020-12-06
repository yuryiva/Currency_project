import React, { Component } from 'react'
import NewsBlock from './newsBlock'

import fullUrl from './fullUrl'

import './newsBlock.css'





//apicall other way


class NewsBlockApi extends Component {

  state={
    getData:false,
    newsData:[],

  }



  componentDidMount(){ 
    fetch (fullUrl)
    .then(urlNews =>  urlNews.json())  
    .then(newsApiJson => this.setState({
      newsData: newsApiJson.articles,
      getData: true
    })
    )
    
  }




  render() {
    return (
      <div className="news" >
        { this.state.newsData.map((content, index) => (<NewsBlock  
        key={index}
        title={content.title}
        image={content.urlToImage}
        description={content.description}
        author={content.author}

        
        />
        ))
      }
      </div> 
    )
  }
}

export default NewsBlockApi;