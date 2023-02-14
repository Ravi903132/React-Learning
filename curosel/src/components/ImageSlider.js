import React, { useState } from 'react'
import { Sliderdata } from './Sliderdata'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { imagedata } from './imagedata';

const ImageSlider = ({slides}) => {

    const [current,setCurrent] = useState(0);
    const length= slides.length; 
    
    const nextslide=()=>{
      setCurrent(current === length-1 ? 0: current + 1 );
    };
    
    const prevslide=()=>{
      setCurrent(current === 0 ? length-1 : current-1);
    };
   
    if(!Array.isArray(slides) || slides.length<= 0)
    {
      return null;
    }
    return (
   <section className='slider'>
   < FaArrowAltCircleLeft className='left-arrow' onClick={prevslide}/>
   <FaArrowAltCircleRight className='right-arrow' onClick={nextslide}/>
   {Sliderdata.map((slide,index)=> {
    return (
      <div className={ index === current ? 'slide-active' : 'slide'} key={index}>
     {index=== current && (<img src={slide.image} alt='travel images' className='image'/>)}
      </div>
    )
   })}

   {imagedata.map((slide,index)=>{
    return (
      <div className={ index === current ? 'slide-active' : 'slide'} key={index}>
     {index=== current && (<img src={slide.im} alt='culture images' className='image'/>)}
      </div>
    )
   })}

   </section>
  );
};

export default ImageSlider;;
