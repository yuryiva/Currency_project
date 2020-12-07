import React, {Component} from "react";

class CoinMoreStuff extends Component {


    state = {
        showMoreData: false,
      }


    


 render(){
    return(
        <>

             { <div className="moreStufs">
    <p className="coin-price">${this.props.price}</p>
    <p className="coin-volume">${this.props.volume.toLocaleString()}</p>
            {this.props.priceChange < 0 ? (
                <p className="coin-percent red"><i className="fas fa-long-arrow-alt-down"></i>{this.props.priceChange.toFixed(2).replace(/-/, ' ')}%</p>
            ) : <p className="coin-percent green"><i className="fas fa-long-arrow-alt-up"> </i>{this.props.priceChange.toFixed(2)}%</p>

        
        } 
             </div> }
        </>
    )}
}

export default CoinMoreStuff;