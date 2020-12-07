import React, { Component } from 'react'
import NewsBlock from './newsBlock'

import fullUrl from './fullUrl'

import './newsBlock.css'





//apicall other way


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
          this.state.status?
          <p>too much requests</p>
          :           
        this.state.getData 
        ?        
        <div> {this.state.newsData.map((content, index) => (<NewsBlock  
        key={index}
        title={content.title}
        image={content.urlToImage}
        description={content.description}
        author={content.author}        
        />
        ))}
        </div>
        :
        <p>loading</p>
      } 

      </div> 
    )
  }
}

export default NewsBlockApi;