import React from 'react';
import { Switch,  Route} from 'react-router-dom';
import './App.css';
import Navig from './components/Navig';
import CryptoNews from './components/News';
import Footer from './components/footer/Footer';
import InfoPage from "./components/Info/InfoPage/InfoPage";
import HeaderNews from './components/headerNewsMenu/HeaderNews/HeaderNews';
import CoinSummaryPage from './Graph/pages/CoinSummaryPage';
import CoinDetailPage from './Graph/pages/CoinDetailPage';




function App() {
  return (
    <div className="App">
      <div className = 'navMenu'>
        <Navig/>
      </div>
                  
          <Switch>
           <Route path="/Info" component={InfoPage} />          
           <Route path="/News" component={HeaderNews} />
           <Route path="/coins/:id" component={CoinDetailPage} />
           <Route exact path="/" >
              <CoinSummaryPage />
              <CryptoNews/> 
              
            </Route>
         </Switch> 


     <Footer />

    </div>
  );
}

export default App;