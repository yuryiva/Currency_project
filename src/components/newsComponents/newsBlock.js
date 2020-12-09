import React from 'react'
import "../../css/CryptoNews.css"


function NewsBlock (props) {


    return (
      <div className="newsBlock">  

        <h4 className='newsBlockTitle'>{props.title}
        
        </h4>
        
        <img className='newsBlockImage' src={props.image} alt={props.title}/>
    <button onClick={()=>props.content}>more</button> 
         <p>{props.description} </p>
         <h6>{props.author}</h6>

        </div>
        
      
    )
  }

export default NewsBlock;