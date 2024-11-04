import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const Navigate=useNavigate()
  return (
    <>
      <div>Home</div>
    <button onClick={()=>Navigate(-1)}>Go Back</button>
    
    </>

  )
}

export default Home