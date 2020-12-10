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


  

  render() {
    return (
      <div>

     { this.state.newsData.title}<h1>hello</h1>

        {/* {this.state.getData ?          
        
        `${this.state.status==='error'? 
        <h1>Error</h1>
        :
        this.state.newsData.map((result, index) => {console.log(result.title);
        return<div>  
          key={index}
          title={result.title}
          </div>
          })
         }`



        :<p>Loading...</p> 
      } */}
      </div>
    )
  }
}

export default ApiNewsNYT;


//  {/* { this.state.newsData.title}<h1>hello</h1> */}
//  { this.state.newsData ? this.state.newsData.map((el, i) =>
//   <NewsWrap
//   title={el.title}
//   />)
//   //Object.entries(data).map()
// //   const NewsWrap = ({ title, updated_date, source}) => (
// // <div>
// //   <h2>{title}</h2>
// //   <h2>{updated_date}</h2>
// //   <p>{source}</p>
// // </div>
// //   )
//   // `${this.state.status === 'error' ?
//   //   <h1>Error</h1>
//   //   :
//   //   this.state.newsData.map((result, index) => (<div>
//   //     key={index}
//   // title={result.title}
//   //   </div>
//   //   ))
//   // }`
//   // console.log(this.state.newsData)
//   : <p>Loading...</p>  
// }
// </div>
// )
// }`
