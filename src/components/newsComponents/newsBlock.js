import React from 'react'
import "../../css/CryptoNews.css"
import { Link} from 'react-router-dom'


function NewsBlock (props) {


    return (
      <div className="newsBlock" >  <Link className='smthNew' to="/News" >

        <h4 className='newsBlockTitle' >{props.title}
        {/* <button className='btn-news' onClick={()=>props.content}>more</button>  */}
        </h4>
        <div>
        <img className='newsBlockImage' src={props.image} alt={props.author}/>
    
        {/* <p className='newsBlockDescription'>{props.description}</p>  */}
        </div>
         <h6>{props.author}</h6>
         </Link>
        </div>
        
      
    )
  }

export default NewsBlock;