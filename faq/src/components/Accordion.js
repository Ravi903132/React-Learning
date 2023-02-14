import React, { useState } from 'react'
import { questions } from './api';
import Myaccordion from './Myaccordion';
import './accordion.css'

const Accordion = () => {

    const [data,setdata] = useState(questions);
  return (
    <>
    
    <div className='first'>
      {data.map((message)=>{
        const {id} = message;
        return <Myaccordion key={id} {...message}/>;
      })}
      </div>
    </>
  )
}

export default Accordion
