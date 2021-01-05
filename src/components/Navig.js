
import React, { useContext} from 'react';
import { Link} from 'react-router-dom';
import '../App.css'
import { WatchListContext } from "../Graph/context/watchListContext";




const Navig= ()=>  {
  const { navLinkOpen, navLinkToggle } = useContext(WatchListContext);
 

 const handleNavlinksToggle =() => {
   navLinkToggle(!navLinkOpen);
 }
  
const renderClasses = ()=> {
  let classes = 'navlinks';

  if(navLinkOpen){
    classes += ' active'
  }
  return classes;
}
  
    
      return (
        <nav className='Navbar'>
            <>
          <div className='logo'>
            <i className= 'fab fa-bitcoin'></i>
            <h4>Wild Traders</h4>
            </div>
            <ul className={renderClasses()}>
            <li className="link"><Link to="/" onClick={handleNavlinksToggle}>Home</Link></li>
             <li className="link"><Link to="/News" onClick={handleNavlinksToggle}>News</Link></li>
             <li className="link"><Link to="/Info" onClick={handleNavlinksToggle}>Info</Link></li>
         </ul>
         {
           navLinkOpen === false ?
         
         <div onClick={handleNavlinksToggle} className="hamburger-toggle">
             <i className = "fas fa-bars fa-lg"></i>
         </div>

          :
          
         <div onClick={handleNavlinksToggle} className="hamburger-krestik">
             <i className ="far fa-times-circle"></i>
         </div>

         }

         </>

    </nav>

         
      )
    }
  
  
  export default Navig