import React from "react";
import "./NewsBox.css";

const NewsBox = (props) => {
  return (
    <div className="newsBox">
      
        <a className="imgContainer" href={props.url}>
          <img src={props.urlToImage} alt={props.author} align="middle"/>
        </a>
      
      <div className="dataContainer">
        
          <a className='data' href={props.url}>{props.title}</a>
        
      </div>
    </div>
  );
};

export default NewsBox;
