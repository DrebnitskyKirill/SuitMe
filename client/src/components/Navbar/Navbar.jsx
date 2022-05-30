import React, { useState } from 'react';
import {  useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal';
import style from './navbar.module.css'

function Navbar() {

  const [modal, setModal] = useState(false)
  const { user } = useSelector(store => store.user)
  return (
    <>
    <nav>
      <div className={style.nav}>
        <Link to="/" className={style.logo}>MIB</Link>
        <ul  className={style.navLi}>
          <li><a onClick={()=> setModal(true)}>Login</a></li>
        </ul>
      </div>
    </nav>
<Modal isOpen={modal} closeModal={() => setModal(false)}/>
    </>
  );
}

export default Navbar;

// {user.hasOwnProperty('id') ? <li><Link to='/logout'>Logout</Link></li> :
