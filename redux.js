import {createSlice,configureStore} from '@reduxjs/toolkit'
import axios from 'axios'


const registerSlice=createSlice({
    name:"register",
    initialState:[],
    reducers:{
          registerData:(store,action)=>{
              store.push(action.payload)
          },
          modifyData:(store,action)=>{
             store=action.payload

          }

    }
})
const store=configureStore({
    reducer:registerSlice.reducer

})
export default store;
export const {modifyData,registerData}=registerSlice.actions
console.log(store.getState())