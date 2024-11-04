
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Advanced_Search = () => {
    const Navigate=useNavigate()
  return (
   <>
      <div>Advanced_Search</div>
    <button onClick={()=>Navigate(-1)}>Go Back</button>
   
   </>
  )
}

export default Advanced_Search