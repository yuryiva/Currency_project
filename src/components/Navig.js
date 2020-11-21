
import React, { Component } from 'react';



class Navig extends Component {

   

  
    render() {
      return (
        <nav>
        <div className = 'left-top'>
        <img src='{this.props.src}'/>
         <p>{this.props.logoName}</p>
         </div>
         <ul>
             <li>{this.props.firstText}</li>
             <li>{this.props.secondText}</li>
             <li>{this.props.thirdText}</li>
         </ul>
    </nav>
      )
    }
  }
  
  export default Navig