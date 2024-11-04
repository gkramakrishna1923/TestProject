

import { Fade,Zoom,Slide } from 'react-slideshow-image';
import Logo from '../Images/Matrimony-logo.webp'
import { useState } from 'react';
const slideImages=[
  {
    url:Logo,
    caption:'1st slide'
  },
  {
    url:Logo,
    caption:'2st slide'
  },
  {
    url:Logo,
    caption:'3st slide'
  }
]





const fadeImages = [
  {
  url:Logo,
      caption: 'First Slide'
  },
  {
    url:Logo,
    caption: 'Second Slide'
  },
  {
    url:Logo,
    caption: 'Third Slide'
  },
];
const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 50,
    slidesToShow: 5,
    slidesToScroll: 5,
    waitForAnimate:false
};

const Image_Slider = () => {
  const [index,SetIndex]=useState(0);
 

  return (
    
   <div >
       <div >
      
        <Fade transitionDuration="1000" >
        {fadeImages.map((fadeImage, index) => (
          <div  key={index}>
            <img  style={{width:'50%'}} src={fadeImage.url} />
            <h1>{fadeImage.caption}</h1>
          </div>
        ))}
      </Fade>
      
    </div>
  

   </div>
    
  )
}
export default Image_Slider;
