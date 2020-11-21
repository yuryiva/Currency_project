
import './App.css';
import Chart1 from './components/Chart1'
import Navig from './components/Navig'


function App() {
  return (
    <div className="App">
      <div className = 'navMenu'>
        <Navig
        src = './sources/Logo.png'
        logoName = "Wild Traders"
        firstText = "News"
        secondText = "Charts"
        thirdText = "About"
        />
      </div>
      <div className = 'mainchart'>
      <Chart1 />
       
      </div>
    </div>
  );
}

export default App;