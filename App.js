// import React from 'react'
// import Main_Container from './matrimony-app/main-Container'
// import Registor from './registor'
// import Router from './matrimony-app/router'



// const App = () => {
//   return (
//     <div><Router /></div>
//   )
// }

// export default App
// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   const [otp,setOtp]=useState(new Array(4).fill(""))
 
//   const inpRef=useRef([])
//   console.log(otp)
//   const handleChange=(e,ind)=>{
//      const {value}=e.target;
 
//        const newOtp=[...otp]
//        newOtp[ind]=value.substring(value.length-1)
//        setOtp(newOtp);
//         const combineOtp=newOtp.join("")
//         console.log(combineOtp)
//         if(value &&newOtp.length > combineOtp.length &&  inpRef.current[ind +1]){
//           inpRef.current[++ind].focus()

//         }
//   }
//   let ine=3
//   const handleKeyDown=(e,ind)=>{
    
//    if(e.key == "Backspace" && !otp[ind] && ind >0){
//     inpRef.current[--ind].focus()

//    }  }
//   useEffect(()=>{
//     inpRef.current[0].focus()
//   },[])
//   return (
//     <div>
//            {otp.map((val,ind)=>{
//               return <input onKeyDown={(e)=>handleKeyDown(e,ind)} style={{width:"50px",height:"50px",margin:"20px"}}
//                 onChange={(e)=>handleChange(e,ind)} value={otp[ind]} name='name' ref={(nput)=>(inpRef.current[ind]=nput)} />
//            })}
//     </div>
//   )
// }

// export default App
import React, { useEffect } from 'react'
import data from './data.json'

const App=()=>{
  const test=new Object()
  test.age=23
        console.log(test)
     
  return (
    <div>
   <center>
      <h1>   ramakrishna</h1>
   </center>
      
    </div>
  )
}

export default App


