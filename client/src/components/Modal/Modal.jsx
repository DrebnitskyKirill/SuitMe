import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import  './modal.css'

function Modal ({isOpen, closeModal}) {
  const [choice,setChoice]=useState(1)
  return (
    <div className={`modal_wrapper ${isOpen ? 'sopen' : 'close'}`}>
    <div className='modal_body'>
      <div className='nav' >
      <p className='closeButton' onClick={() => closeModal()}>&times;</p>
      {choice === 1 && <h3 style={{'textAlign':"center"}}>Войти</h3>}
     { choice === 2 && <h3 style={{'textAlign':"center"}}>Зарегистрироваться</h3>}
      </div>
  {choice === 1 && <Login open={()=>setChoice(2)} closeModal={closeModal}/>}
     {choice === 2 && <Registration open={()=>setChoice(1)} closeModal={closeModal}/>}
      </div>
    </div>
  );
}

export default Modal;
