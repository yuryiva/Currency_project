import React from "react";

const Coin = ({image, symbol, id}) =>{
    return(
        <div className="coin-container">
            <img src={image}/>
             <h3>{symbol}</h3>
             <h4>{id}</h4>
        </div>
    )
}

export default Coin;