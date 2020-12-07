import React, {Component} from "react";

class Coin extends Component {


    state = {
        showMoreData: false,
      }


    


 render(){
    return(
        <div className="coin-container" >
            <img src={this.props.image} alt={this.props.id}/>
            <div className="parahr">
             <h3>{this.props.symbol}</h3>
             <h4>{this.props.id}</h4>
             </div>

        </div>
    )}
}

export default Coin;