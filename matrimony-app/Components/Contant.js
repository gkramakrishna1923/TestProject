import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contant = () => {
    const Navigate=useNavigate()
  return (
   <>
      <div>Contant</div>
    <button onClick={()=>Navigate(-1)}>Go Back</button>
   
   </>
  )
}

export default Contant