
import React, { useEffect, useState } from 'react'
import './register.css'
import { useFormik } from 'formik'
import * as Yup from  'yup'
import { registerData } from './redux'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { register } from './actions/auth'

const Registor = () => {

    const dispatch=useDispatch();
    const regData=useSelector(data=>data)
    
    const Navigate=useNavigate()
   
    console.log(regData)
        const customerSchema = Yup.object().shape({
            //add validation rules and error messages here for each required field
            name: Yup.string()
                            .min(2, 'Too short  name')
                            .max(50, 'Too long  name')
                            .required('Project name is required'),
            
      
            
            gmail: Yup.string()
                             .email('Invalid  email id') 
                             .required('Email id is required'),   
                             
            password: Yup.string()
                            .required('password number is required')
                            
                        
    })
    const formik=useFormik({
        initialValues:{
            name:'',
            gmail:'',
            password:'',
            isLogIn:false
        },
        validationSchema:customerSchema,
        onSubmit:(values)=>{
           dispatch(registerData(values))
           register(values.name,values.gmail,values.password)
           Navigate('/Login')
           
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
   
  return (
      <div className='reg-Log-Con'>

      <form   style={{display:"flex",flexDirection:"column"}} onSubmit={formik.handleSubmit}>
        
<div className='reg-Log-Form' >
     <center><h1><u>Register</u></h1></center>
      <b>Name </b>
        <input name='name' onChange={formik.handleChange}
        value={formik.values.name} onBlur={formik.handleBlur} placeholder='Enter your Name'
        />
        <span style={{color:'red'}}>{ getFormErrorMessage('name')}</span> 
        <label>Gmail </label>
        <input name='gmail' onChange={formik.handleChange} value={formik.values.gmail}
         onBlur={formik.handleBlur} placeholder='Enter your Gmail'
         />
        <span style={{color:'red'}}>{ getFormErrorMessage('gmail')}</span> 
      
        <label>Password :</label>
        <input name='password' onChange={formik.handleChange} value={formik.values.password}
         onBlur={formik.handleBlur} placeholder='Enter your password'
         />
        <span style={{color:'red'}}>{ getFormErrorMessage('password')}</span> 
        <center>
        <button type='submit'>Submit</button>
        </center>
        </div>
      </form>

    </div>
    
  )
}

export default Registor
