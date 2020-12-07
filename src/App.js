import React from 'react';
import { Switch,  Route} from 'react-router-dom';
import './App.css';
import ApiData from './components/ApiData';
import Navig from './components/Navig';
import TradeWithUs from './components/TradeWithUs';
import CryptoNews from './components/News';
import Footer from './components/footer/Footer';
import InfoPage from "./components/Info/InfoPage/InfoPage";
import NewsPage from "./components/News/news-page";
import ChartsPage from "./components/Charts/chart-page";




function App() {
  return (
    <div className="App">
      <div className = 'navMenu'>
        <Navig/>
      </div>
                  
          <Switch>
           <Route path="/Info" component={InfoPage} />          
           <Route path="/News" component={NewsPage} />
           <Route path="/Charts" component={ChartsPage} />
           <Route exact path="/" >
              <ApiData />
              <CryptoNews/> 
              <TradeWithUs/>
            </Route>
         </Switch> 


     <Footer />

    </div>
  );
}

export default App;