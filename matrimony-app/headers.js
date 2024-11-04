import React from 'react'
// import '../App.css'
import './header.css'
import Logo  from '../Images/Matrimony-logo.webp'
import { useNavigate } from 'react-router-dom'

const Headers = () => {
    const Navigate=useNavigate()
  return (
    <div id='header-Con' >
       <div id='header' >
        <img src={Logo} />
      <div id='row2-Hea'>
       <div>Contant : 1800-000-000</div>
        <button onClick={()=>Navigate('/login')}>Login</button>
        <button onClick={()=>Navigate('/')}>Registor</button>
      </div>
        </div>

    </div>
  )
}

export default Headers