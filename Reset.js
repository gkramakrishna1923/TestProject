import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Reset = () => {
   const data=   useSelector((d)=>d)
   const [password,setPassword]=useState();
   const dispatch=useDispatch()
   const handleClick=()=>{
    
   }
  return (
    <div>
         <input type='number' onChange={(e)=>setPassword(e.target.value)} onClick={handleClick}/>
      
    </div>
  )
}

export default Reset
