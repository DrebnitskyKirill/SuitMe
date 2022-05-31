import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import  './modal.css'

function Modal ({isOpen, closeModal}) {
  const [choice,setChoice]=useState(2)
  
  return (
    <div className={`modal_wrapper ${isOpen ? 'sopen' : 'close'}`}>
    <div className='modal_body'>
      <div className='nav' >
      <p className='closeButton' onClick={() => closeModal()}>&times;</p>
      <h3 style={{'textAlign':"center"}}>Registration</h3>
      </div>
      {choice === 1 && <Login open={()=>setChoice(2)}/>}
     {choice === 2 && <Registration open={()=>setChoice(1)}/>}
      </div>
    </div>
  );
}

export default Modal;
