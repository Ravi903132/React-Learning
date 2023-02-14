import React, { useState } from 'react'

const Myaccordion = ({question,answer}) => {
    
    const [show,setshow] = useState(false);
  return (
    <>
    <div className='item'>
        <div className='title'>
      <h3>{question}</h3>
      <p onClick={()=>setshow(!show)}><h2>{show ? "-" : "+"}</h2></p>
      </div>
      {show && <h3 className='content'>{answer}</h3>}
      </div>
    </>
  )
}

export default Myaccordion
