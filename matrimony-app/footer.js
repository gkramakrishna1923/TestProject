import React from 'react';

import './footer.css'
import Logo from '../Images/Matrimony-logo.webp'
import {BrowserRouter,Routes,Route, Link , NavLink} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Advanced_Search from './Components/Advanced_Search';
import Contant from './Components/Contant';

 
const Footer = () => {
    function NavBar(){
        return <ul id='nav-UL'>

            <li><NavLink to='/Home'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/AdvanceSearch'>Advance Search</NavLink></li>
            <li><NavLink to='/Contant'>Contant</NavLink></li>
        </ul>

    }
  return (
    <div  style={{backgroundColor:"black",color:"white"}}>
            <div style={{display:"flex",justifyContent:"space-between",margin:"0px 30px"}}>

            <img src={Logo}/>
        <nav id='footer-Con'>
      <NavBar/>
        
         </nav>
            </div>
        
    </div>
  )
}

export default Footer