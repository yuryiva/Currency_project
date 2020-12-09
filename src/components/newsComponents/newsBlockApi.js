import React, { Component } from 'react'
import NewsBlock from './newsBlock'

import fullUrl from './fullUrl'

import './newsBlock.css'








class NewsBlockApi extends Component {

  state={
    getData: false,
    newsData:[],
    status: "error"
  }



  componentDidMount(){ 
    fetch (fullUrl)
    .then(urlNews =>  urlNews.json())  
    .then(newsApiJson => this.setState({
      newsData: newsApiJson.articles,
      getData: true,
      status:newsApiJson.status

    })
    )
    
  }




  render() {
    return (
      <div className="newsCard" >
        {
          this.state.status === "error"
          ?
          <p>too much requests</p>
          :           
        this.state.getData 
        ?        
         this.state.newsData.map((content, index) => (<NewsBlock  
        key={index}
        title={content.title}
        image={content.urlToImage}
        description={content.description}
        author={content.author}
        content={content}        
        />
        ))
        
        :
        <p>loading</p>
      } 

      </div> 
    )
  }
}

export default NewsBlockApi;