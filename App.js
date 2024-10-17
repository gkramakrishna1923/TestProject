// import React, { useState } from 'react'
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

import { isEditableInput } from "@testing-library/user-event/dist/utils"

// const App = () => {
//   const [formData,setFormData]=useState({
//     eeee:'',
//     email:'',
//     occuption:'',
//     gender:'',
//     language:[]

//   })
//   const [data,setData]=useState([])

//   const handlechange=(e)=>{
//     const{name,value}=e.target
//     let copy={...formData}
//     if(name==="language"){
//       if(copy.language.some((item)=>item===value)){
//         const fil=copy.language.filter((item)=>item !== value)
//         setFormData({...formData,language:fil})
//       }else{
//       const c=copy.language.push(value)
//       setFormData({...formData,c})
//       }

//     }else{
//       setFormData({...formData,[name]:value})
//     }

//   }
//   const handlesubmit=(e)=>{
//     e.preventDefault()

//      setData((prev)=>{
//       return [...prev,formData]

//     })
//     setFormData(()=>{
//     return  {
//         eeee:'',
//         email:'',
//         occuption:'student',
//         gender:'',
//         language:[]
//       }
//     })
//   }
//   console.log(data)

//   return (
//     <div>
//          <form onSubmit={handlesubmit}>
//          <div>
//            <h2>User name</h2>
//            <input onChange={handlechange} value={formData.eeee} name="eeee" placeholder="Enter your name"/>
//        </div>

//        <div>
//            <h2>Email</h2>
//            <input onChange={handlechange} value={formData.email} name='email' placeholder="Enter your email"/>
//        </div>

//          <div>
//              <h2>occuption</h2>
//              <select onChange={handlechange} value={formData.occuption} name='occuption'>
//                   <option>student</option>
//                   <option>employee</option>
//                    <option>nothing</option>
//              </select>
//          </div><br></br>
//          <div>
//              <input onChange={handlechange} value="male" id="male" type='radio' name="gender" />
//              <label htmlFor='male'>male</label><br></br>
//              <input onChange={handlechange} id="female" type='radio' value="female"name="gender" />
//              <label htmlFor='female'>female</label><br></br>
//              <input onChange={handlechange} id="none" type='radio'value="none"name="gender" />
//              <label htmlFor='none'>none</label><br></br>
//          </div><br></br>

//          <div>

//          <input onChange={handlechange} id="HTML" type='checkbox' name="language" value="HTML"  />
//          <label htmlFor='HTML'>HTML</label><br></br>
//          <input onSelect onChange={handlechange} id="CSS" type='checkbox' name="language" value="CSS"  />
//          <label htmlFor='CSS'>CSS</label><br></br>
//          <input onChange={handlechange} id="JS" type='checkbox' name="language" value="JS"  />
//          <label htmlFor='JS'>JS</label><br></br>
//          </div>
//          <br>
//          </br>
//          <button>add data</button>
//          <DataTable value={data} tableStyle={{ minWidth: '20rem', border:"10px solid", backgroundColor:"purple"}}>
//                     <Column field="eeee" style={{backgroundColor:"green",width:"20rem",border:"2px solid" }} header="Customer" />
//                     <Column field="email" style={{backgroundColor:"orange",width:"20rem",border:"2px solid" }}  header="ProjectName" />
//                     <Column field="occuption" style={{backgroundColor:"yellow",width:"10rem",border:"2px solid" }} header="Customer" />
//                     <Column field="language[0]" style={{backgroundColor:"green",width:"10rem",border:"2px solid" }} header="ProjectName" />
//                 </DataTable>
//          </form>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import Youtue from './Youtue'

// const obj=[{
//   id:1,
//   name:"ram",
//   on:true
// },
// {
//   id:2,
//   name:"suresh",
//   on:true
// },
// {
//   id:3,
//   name:"naresh",
//   on:false
// },
// {
//   id:4,
//   name:"swa",
//   on:true
// },
// {
//   id:5,
//   name:"manoj",
//   on:false
// },
// {
//   id:6,
//   name:"tarun",
//   on:false
// }
// ]

// const App = () => {
//   const [data,setData]=useState(obj)

//   const toggle=(book)=>{

//      setData((prevdata)=>{
//            const newArr=[]
//            for(let i=0;i<prevdata.length; i++){
//                  const currentArr=prevdata[i]
//                       if(currentArr.id===book){
//                              const updateArr={
//                                      ...currentArr,
//                                        on: !currentArr.on
//                                   }
//                                   console.log(currentArr)
//                            newArr.push(updateArr)
//                          }else{
//                           newArr.push(currentArr)
//                           console.log(currentArr)
//                          }
//            }
//            console.log(newArr)
//            return newArr
//      })

//   }

//   return (
//     <div className='main'>
// {/*
//    {
//     data.map((item)=>{
//       return <Youtue item={item}/>
//    })
//    } */}
//    {data.map((item,index)=>{

//        return  <Youtue on={item.on} id={item.id} key={item.id}  toggle={toggle} name={item.name}  />
//   })}
//     </div>
//   )
// }

// export default App
//

//

// import React, { useState } from 'react'
// import Main from './todoapp/main';
// import Header from './todoapp/header';

// const App = () => {
//   const Arr = ["rama", "swarna", "vignesh"]

// const [move,setMove]=useState([])
// console.log(move)

//   return (
//     <div>
//       <Header setMove={setMove} />
//           < Main move={move}/>

//     </div>
//   )
// }

// export default App

// import { Formik,  Form, Field, ErrorMessage } from "formik";

// import React, { Children } from "react";
// import ShowError from "./Apptest";
// import * as Yup from "yup";

// const App = () => {
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("email required"),
//     Password: Yup.string()
//       .required("password required")
//       .max(10, "atleat 10 character")
//       .min(2, "min 2"),
//   });
//   const handlesubmit=(val)=>{
//     console.log(val)
//   }
//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", Password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handlesubmit}
//       >
//         <Form>
//           <label htmlFor="email">Email</label>
//            <Field type="email" name="email"/>
//           <br />
//           <br />
//           <ErrorMessage name="email" render={(msg)=><div>{console.log(msg)}</div>}/>

//           <label htmlFor="Password">Password</label>
//           <Field name="Password"  />
//           {/* <p>{Formik.errors.Password && Formik.touched.Password?Formik.errors.Password:''}</p> */}
//           <ErrorMessage name="Password" component={ShowError}/>
//           <button type="submit">submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { Field, Formik, ErrorMessage, Form, FieldArray} from "formik";
// import * as Yup from "yup";
// import "./App.css";

// const App = () => {
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invaild email").required("required"),

//     name: Yup.string().required("required name"),

//   });
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: ["", ""],
//   };
//   const onSubmit = (val) => {
//     console.log(val);
//   };
//   const handleError = (val) => {
//     return <div style={{ color: "tomato" }}>{val.children}</div>;
//   };
//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}

//       >
//         { (formik)=>{

//         return ( <Form id="form">
//             <label htmlFor="name">name</label>
//             <Field name="name" />
//             <ErrorMessage name="name" component={handleError} />
//             <br />
//             <label htmlFor="email">Email</label>
//             <Field name="email" />
//             <ErrorMessage name="email" component={handleError} />
//             <br />

//             <br />

//             <FieldArray name="phone">
//               {(filedargs) => {
//                 console.log(filedargs);
//                 const { form, push, remove } = filedargs;
//                 const { values } = form;
//                 const { phone } = values;
//                 return (
//                   <div>
//                     {phone.map((num, index) => {
//                       return (
//                         <div>
//                           {
//                             <div>
//                               <Field name={`phone[${index}]`} />
//                               <button type="button" onClick={(e)=>push("")}>
//                                 +
//                               </button>
//                               {phone.length > 1 && (
//                                 <button
//                                   type="button"
//                                   onClick={() => remove(index)}
//                                 >
//                                   -
//                                 </button>
//                               )}
//                             </div>
//                           }
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               }}
//             </FieldArray>
//             <button type="button" onClick={()=>console.log(formik.dirty,formik.isValid)}>valid</button>
//             <br />
//             <button type="submit" className="submit" disabled={!(formik.dirty & formik.isValid)}>submit</button>
//           </Form>)}
// }
//       </Formik>
//     </div>

//   );
// };

// export default App;
// import React from "react";
// import Youtue from "./Youtue";
// import {
//   Formik,
//   Form,
//   Field,
//   ErrorMessage,
//   FieldArray,
//   FastField,
// } from "formik";
// import * as Yup from "yup";
// import "./App.css";

// function App() {
//   const initialValues = {
//     name: "",
//     comments: "",
//     password: "",
//     languages: [],
//     technologies:'',
//     gender:'',
//     try:""
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("name required"),
//     password: Yup.string().required("password required"),
//   });
//   const onSubmit=(val,onSubmitProps) => {

//     console.log(val,onSubmitProps);

//     onSubmitProps.resetForm({values : initialValues})

//   };
//   const languages = [
//     { key: "HTML", value: "HTML" },
//     { key: "CSS", value: "CSS" },
//     { key: "REACT", value: "REACT" }
//   ];
//   const technologies = [
//     { key: "tech1", value: "tech1" },

//     { key: "tech2", value: "tech2" },
//   ];
//   const gender= [
//     { key: "male", value: "male" },

//     { key: "female", value: "female" },
//   ];
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {(formik) => {
//         return (
//           <Form className="form">
//             <Youtue
//               className="form"
//               name="name"
//               label="name"
//               placeholder="this is name"
//               id="name"
//             />
//             <Youtue
//               className="form"
//               name="password"
//               label="password"
//               type="password"
//               id="password"
//             />
//             <Youtue
//               className="form"
//               name="comments"
//               label="comments"
//               as="textarea"
//               id="comments"
//             />
//             <FastField className="form" name="technologies">
//               {({ field }) => {
//                 console.log();
//                 return technologies.map((opt, index) => {
//                   return (
//                     <div key={index}>
//                       <label htmlFor={opt.key}>{opt.key}</label>
//                       <input
//                         id={opt.key}
//                         type="radio"
//                         key={index}
//                         {...field}
//                         checked={field.value === opt.value}
//                         value={opt.value}
//                       />
//                     </div>
//                   );
//                 });
//               }}
//             </FastField>

//             <FastField className="form" name="languages">
//               {({ field }) => {
//                 console.log();
//                 return languages.map((opt, index) => {
//                   return (
//                     <div key={index}>
//                       <label htmlFor={opt.key}>{opt.key}</label>
//                       <input
//                         id={opt.key}
//                         type="checkbox"

//                         {...field}
//                         checked={field.value.includes(opt.key)}
//                         value={opt.value}
//                       />
//                     </div>
//                   );
//                 });
//               }}
//             </FastField>

//             <FastField name="gender">
//                {
//                 ({field})=>{
//                     return <div>
//                         {
//                           gender.map((opt,index)=>(
//                            <div key={index}>
//                             <label htmlFor={opt.key}>{opt.key}</label>
//                                <input {...field} type="radio" id={opt.key} value={opt.value} checked={field.value === opt.value}/>
//                             </div>
//                           ))
//                         }
//                     </div>
//                 }
//                }
//             </FastField>

//             <FastField name="try">
//                {
//                 (props)=>{
//                   const {field}= props
//                   console.log(props)
//                     return <div>
//                         {
//                           languages.map((opt,index)=>(
//                            <div key={index}>
//                             <label htmlFor={index}>{opt.key}</label>
//                                <input id={index} {...field} type="checkbox" value={opt.value} checked={field.value.includes(opt.key)}/>
//                             </div>
//                           ))
//                         }
//                     </div>
//                 }
//                }
//             </FastField>

//             <button className="form" type="submit">
//               Submit
//             </button>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// }

// export default App;
// import React, { useState } from 'react'
// import {useSelector,useDispatch} from 'react-redux'
// import { AddMoney } from './Apptest'

// const App = () => {
//     const [amount,setAmount]=useState({
//         addMoney:"",
//         name:""
//     })
//     console.log(amount)

//  const nama=useSelector((state)=>{
//         return state
//     })
//   const dispatch=useDispatch()
//   const handleChange=(e)=>{
//     const {name,value}=e.target
//     setAmount((prev)=>{
//         return {...prev,[name]:value}
//     })
//   }
//   return (
//     <div>
//         <h1>{nama.fullName}</h1>
//        <h1>{nama.balance}</h1>
//        <input onChange={handleChange} name="addMoney" type='number' />
//        <button onClick={()=>dispatch(AddMoney(amount.addMoney))}>deposit</button>
//        <input name="name" onChange={handleChange} type='text'/>
//        <button onClick={()=>dispatch({type:"addname",payload:amount.name})}>namae</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import {useSelector,useDispatch} from "react-redux"

// const App = () => {
//     const[value,setValues]=useState({
//         name:'',
//         balance:0,
//         seq:0
//     })

//     const data=useSelector((data)=>{
//         return data
//      })

//      const dispatch = useDispatch()
//      const handleSubmit=(e)=>{
//         e.preventDefault()
//         dispatch({type:"addMoney",payload:value.balance})

//         dispatch({type:"addName",payload:value.name})
//         dispatch({type:"details",payload:{

//            id:value.seq++,
//            amount:data.transcation.balance+ +value.balance

//         }})

//      }

//      console.log(data)
//      const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setValues(prev=>{
//             return {...prev,[name]:value}
//         })

//      }

//   return (
//     <div>
//         <div>
//             <h1>{data.transcation.name}</h1>
//             <h3>{data.transcation.balance}</h3>
//         </div>
//        <form onSubmit={handleSubmit}>
//       name: <input  name="name" onChange={handleChange} />
//        balance: <input type='number' name="balance" onChange={handleChange} />
//        {
//        data.address.map((obj,index)=>{

//             return <div key={index}>
//                 <h1 >{obj.amount}</h1>
//                 <h1>{obj.id}</h1>
//             </div>
//         })
//        }
//         <button type='submit'> submit</button>
//        </form>

//     </div>
//   )
// }

// export default App
// import React,{useState} from 'react'
// import SetupTests from './setupTests'
// import DropDown from './setupTests'

// const App = () => {
//   const arr=["ram","vishnu","sea"];
//   const [values,setValues]= useState(["ram","vishnu","sea"]);
//   const [check,setChecked]= useState({})
//   console.log(check)

//   const handleDelete=(index)=>{
//          const val=[...values]
//     const newValues=val.filter((el,i)=>{
//       return index!==i
//     })
//     setValues(newValues)

//   }

//   return (
//     <div>

//          {
//             values.map((el,i)=>{
//               const checkedd={...check}

//               const handleCick=(e=>{
//                 const {name,value}=e.target
//                 setChecked(p=>{
//                   return {...p,[name]:!p[name]}
//                 })
//               })
//                 return (<>
//                   <input    type='checkbox' value={el} name={el} onChange={handleCick} checked={check[el]} />
//                     <h1>{el}</h1>
//             { check[el]&& <button onClick={()=>handleDelete(i)}>delete</button>}
//                 </>)
//           })
//          }
//     </div>
//   )
// }

// export default App
// import React, { useState } from "react";

// const App = () => {
//   const [values,setValues]=useState({})
//   const [country,setCountry]= useState(0)
  
//   const countries = [
//     { name: "india", value: "IN", cities: ["Delhi", "Mumbai"] },
//     { name: "pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
//     { name: "Bangladesh", value: "BG", cities: ["Dhaka", "chittagong"] },
//   ];
// console.log(country,":",values)
 
// const handleChange=(e)=>{
//   const {name,value}= e.target;
//   console.log(value)
//   setCountry(value)
//   //setValues({...values,[name]:values})
// }

//   return (
//     <div>
//       <select name="countries" onChange={(e)=>handleChange(e)}>
//         {countries.map((cou,index) => {
//           return (
//             <>
//               <option value={index}>{cou.name}</option>
             
//             </>
//           );
//         })}
//       </select>
//       <br/>
//       {/* {THis is second Dropdown } */}
      
//       <select name="cities"onChange={(e)=>setValues(e.target.value)}>
//                   {
//                     countries[country].cities.map((el)=>{
//                       return <option value={el}>{el}</option>
//                     })
//                   }
//        </select>
//     </div>
//   );
// };

// export default App;
// import { Column } from 'primereact/column'
// import { DataTable } from 'primereact/datatable'
// import { Dialog } from 'primereact/dialog'
// import React, { useState } from 'react'

// const App = () => {
//   const [check,setCheck]=useState(false)
//   const quoteItems=[
//     {name:"ram",age:23,Address:"peddatekur"}
//   ]
//   const handleVisible=()=>{
//     setCheck(true)
//   }
//   const handleHide=()=>{
//     setCheck(false)
//   }
//   const handleDiolgue=()=>{
//     setCheck(true)
//   }
//   return (
//     <div>
//       <DataTable value={quoteItems}  tableStyle={{ minWidth: '60rem', minHeight: '2rem' }}>

// {/* <Column field="name" header="Code"  style={{ width: '20%' }}></Column> */}
// <Column field='name' header="name">  </Column>
// <Column field='age' header="age">  </Column>
// <Column field='Address' header="Address">  </Column>
// </DataTable>
// <button onClick={()=>handleDiolgue()}>show Dialogue</button>
// <Dialog visible={check} onHide={handleHide}> 

//   <p>this is a Dialog</p>
// </Dialog>

//     </div>
//   )
// }

// export default App

import React, { useContext } from 'react'
import './App.css'
import Youtue from './Login'
import Header from './Task_intern/Header'
import Maincontent from './Task_intern/Maincontent'
import Footer from './Task_intern/Footer'
import Associate_Editor_Guidelines from './Task_intern/Navcomp/Source/Guideliness-Comp/Associate-Editor/Associate_Editor_Guidelines'

import   Join_as_Editor  from './Task_intern/Navcomp/Source/Guideliness-Comp/Editors/Join_as_Editor'

import {UseAuth}  from './Apptest'
import { createContext } from "react"
const App = () => {
  const data=UseAuth()
  
const context=createContext()

  return (
    <div id='maincon'>
  
{/* <Header /> */}

<Maincontent />

<Footer />
    </div>
  )
}

 export default App
// import React, { useEffect, useState } from 'react'
// import './App.css'
// import { users } from './Apptest'
// import { useDispatch, useSelector } from 'react-redux'

// const App = () => {
//   const [user,setUser]=useState()
//   const [index,setIndex]=useState()
//   const dispatch=useDispatch()
//   let dataa=  useSelector((da)=>da.userData)
//   console.log(typeof index === "number")
//   useEffect(()=>{
//      setUser(dataa)

//   },[dataa])
//   // if(typeof user === "object"){
//   //    console.log("object,user",users)
//   //    user.map((e)=>console.log(e.name))
//   // }else{

//   //   console.log(user)

//   // }
 
  
//   const fetchData=(dipatch,getstate)=>{

//      const data=users;
//      dipatch({type:"Add",payload:data})



//   }
//   function handleSubmit(ind){

//       return <>
     
      
      
//       </>
    

//   }
 

//   return (
//     <div>


//      {typeof index ===  "number" && <div>
//         {
//           users.map((el,ind)=>{
//             return( 
//                <>

//                {
//                 index === ind && <div  className='con'>

//                 <h6>{user[index].name}</h6>
//                 <h6>{user[index].email}</h6>
//                 <h6>{user[index].username}</h6>
//                 <h6>{user[index].phone}</h6>
//                 <h6>{user[index].address.street}</h6>
//                 </div>
//                }
               
               
               
//                </>


//             )

//           })
//         }
           
//       </div>}
     
// <p>
//       {
//        typeof user === "object" &&   dataa?.map((el,idd)=>{
//       return <div className='con'  onClick={()=>setIndex(idd)}>
      
//       <h4>{el.name}</h4>
      
            
//       </div>
//   })
     
//       }
//       </p>
//       <button onClick={()=>dispatch(fetchData)}>Get</button>
//     </div>
//   )
// }

// export default App






