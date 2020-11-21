import React from 'react'

const Navig = props => (
    
 <nav>
     <div className = 'left-top'>
     <img src='{props.src}'/>
      <p>{props.logoName}</p>
      </div>
      <ul>
          <li>{props.firstText}</li>
          <li>{props.secondText}</li>
          <li>{props.thirdText}</li>
      </ul>
 </nav>
)

export default Navig;


