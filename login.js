


import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from  'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { modifyData } from './redux';
import './register.css'

const Login = () => {
    const [registerData,setRegisterData]=useState([])
    
    const Navigate=useNavigate();
    const regData=useSelector(data=>data)
    console.log(registerData)
    const dispatch=useDispatch()
    useEffect(()=>{
        setRegisterData(regData)
      },[regData])
     
        const customerSchema = Yup.object().shape({
            //add validation rules and error messages here for each required field
         gmail: Yup.string()
                             .email('Invalid  email id') 
                             .required('Email id is required'),   
                             
            password: Yup.string()
                            .required('password number is required')
                            
                        
    })
    const formik=useFormik({
        initialValues:{
          
            gmail:'',
            password:''
        },
        validationSchema:customerSchema,
        onSubmit:(values)=>{
           registerData?.map((regda,index)=>{

            if(regda.gmail== values.gmail 
                && 
               regda.password === values.password ){
                 Navigate('/main-Con')
                 Login(values.gmail,values.password)
            }
           })

        }
    });
  

//This will check whether form field is Invalid or not
const isFormFieldInvalid = (name) => (formik.touched[name]&& formik.errors[name]);

//This will return if the form field has any error message
const getFormErrorMessage = (name) =>{
    return isFormFieldInvalid(name) 
        ? <small className='p-error'>{formik.errors[name]}</small> 
        : <small className='p-error'>&nbsp;</small>
}
const handleForgot=()=>{
      const modify=regData.map((obj,ind)=>{
            if(obj.gmail==formik.values.gmail){
              
              Navigate('/Reset')
            }
      })
   
    
}
   
  return (
    <div className='reg-Log-Con'>
      <form   style={{display:"flex",flexDirection:"column"}} onSubmit={formik.handleSubmit}>

      <div className='reg-Log-Form'> 
      <h1><center>Login</center></h1>


        
      <label htmlFor='gmail'>Gmail </label>
        <input id='gmail' name='gmail' onChange={formik.handleChange}
         value={formik.values.gmail} onBlur={formik.handleBlur} placeholder=' Enter your Name'/>
        <small style={{color:'red'}}>{ getFormErrorMessage('gmail')}</small> 
      
        <label>Password </label>
        <input name='password' onChange={formik.handleChange} 
        value={formik.values.password} onBlur={formik.handleBlur}
        placeholder='Enter your Password'
        />
        <small style={{color:'red'}}>{ getFormErrorMessage('password')}</small> 
       <center> <button type='submit'>Submit</button></center>
        <p>
        Reset Password ?<button type='click' onClick={handleForgot}>Click Here</button>
        </p>
      </div>
        
      </form>

    </div>
  )
}

export default Login;
