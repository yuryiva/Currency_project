
import React, {useState} from 'react';




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
          <div className='logo'>
            <i className= 'fab fa-bitcoin'></i>
            <h4>Wild Traders</h4>
            </div>
            <ul className={renderClasses()}>
             <li className="link"><a href="#">News</a></li>
             <li className="link"><a href="#">Charts</a></li>
             <li className="link"><a href="#">Info</a></li>
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
    </nav>

         
      )
    }
  
  
  export default Navig