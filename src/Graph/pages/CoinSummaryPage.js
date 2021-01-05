import React, { useContext} from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";

import { WatchListContext } from "../context/watchListContext";


const CoinSummaryPage = () => {

  const { navLinkOpen } = useContext(WatchListContext);

  return (
    
    <div className= {navLinkOpen ? "coinsummary_none" : "coinsummary shadow border p-2 rounded mt-2 bg-light"}>
        
      <AddCoin />
      <CoinList />
    </div>
    
  );
};

export default CoinSummaryPage;