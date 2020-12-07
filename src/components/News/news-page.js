import React, { Component } from 'react'
import NewsBlockApi from '../newsComponents/newsBlockApi'

import  './news-page.css'

class NewsPage extends Component {
    render() {
        return (
            <div className='newsPage'>
                <div >
                    <NewsBlockApi />
                </div>
            </div>
        )
    }
}





export default NewsPage;