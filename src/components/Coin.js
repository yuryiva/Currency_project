import React, {Component} from "react";

class Coin extends Component {


    state = {
        showMoreData: false,
        winner:""
      }


    
    


 render(){
    return(
        <div className="coin-container" >
            <img src={this.props.image}/>
            <div className="parahr">
             <h3>{this.props.symbol}</h3>
             <h4>{this.props.id}</h4>
             </div>


             <div className="moreStufs">
    <p className="coin-price">${this.props.price}</p>
    <p className="coin-volume">${this.props.volume.toLocaleString()}</p>
            {this.props.priceChange < 0 ? (
                <p className="coin-percent red">{this.props.priceChange.toFixed(2)}%</p>
            ) : <p className="coin-percent green">{this.props.priceChange}%</p>

        
        } 
             </div>
        </div>
    )}
}

export default Coin;