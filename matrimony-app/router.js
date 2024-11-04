import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main_Container from './main-Container'
import Registor from '../registor'
import Login from '../login'
import Home from './Components/Home'
import About from './Components/About'
import Advanced_Search from './Components/Advanced_Search'
import Contant from './Components/Contant'
import Reset from '../Reset'



const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main-Con' element={<Main_Container/>}/>
        <Route path='/' element={<Registor/>}/>
        
        <Route path='/Home' element={<Home/>}  />
              <Route path='/About' element={<About/>}  />

              <Route path='/AdvanceSearch' element={<Advanced_Search/>}  />

              <Route path='/Contant' element={<Contant/>}  />
              <Route path='/Reset' element={<Reset/>}/>
    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default Router