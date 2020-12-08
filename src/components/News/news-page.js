import React, { Component } from 'react'
import ApiNewsNYT from "./nytApi/ApiNewsNYT";

import  './news-page.css'

class NewsPage extends Component {











    render() {
        return (
            
                <div>
                  <ApiNewsNYT />
                </div>
            
        )
    }
}





export default NewsPage;