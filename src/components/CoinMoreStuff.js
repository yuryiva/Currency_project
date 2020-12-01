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
                <p className="coin-percent red">{this.props.priceChange.toFixed(2)}%</p>
            ) : <p className="coin-percent green">+ {this.props.priceChange.toFixed(2)}%</p>

        
        } 
             </div> }
        </>
    )}
}

export default CoinMoreStuff;