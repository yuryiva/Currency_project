
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'





const Navig= ()=>  {

 const [navLinkOpen, navLinkToggle] = useState(false);

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
            <li className="link"><Link to="/">Home</Link></li>
             <li className="link"><Link to="/News">News</Link></li>
             <li className="link"><Link to="/Charts">Charts</Link></li>
             <li className="link"><Link to="/Info">Info</Link></li>
         </ul>
         {
           navLinkOpen == false ?
         
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