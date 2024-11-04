import React ,{useState}from 'react'
import Registor from '../registor';

import Headers from './headers'
import Container_1 from './container_1'
import Container_2 from './container_2'
import Footer from './footer'
import Image_Slider from './Image_slider'
import Login from '../login';
import './main-Container.css'



const Main_Container = () => {
    const [activeCon,setActiveCon]=useState(false)
  return (
    <div id='root-Con'>
        <span onClick={()=>setActiveCon(!activeCon)}>con</span>
        <Headers />
        <Image_Slider />
      {/* {!activeCon &&  <Container_1 />}
       {activeCon && <Container_2 />} */}
        <Footer />
   

    


    </div>
  )
}

export default Main_Container