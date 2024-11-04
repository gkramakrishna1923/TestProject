import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const Navigate=useNavigate()
  return (
   <>
      <div>About</div>
    <button onClick={()=>Navigate(-1)}>Go Back</button>
   
   </>
  )
}

export default About;