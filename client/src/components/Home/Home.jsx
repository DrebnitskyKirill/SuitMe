import React from 'react';
import style from './home.module.css'
import foto from '../img/Home.jpg'
import Steps from './Steps';
import FirstThings from './FirstThings';

function Home() {
  return (
    <>
      <div className={style.home}>
        <div className={style.blocTagline}>
          <h1>Смокинги и костюмы в аренду</h1>
        </div>
        <div className={style.blocImg}>
          <img src={foto} alt='img'/>
        </div>
      </div>
      <FirstThings/>
     <Steps/>
    </>
  );
}

export default Home;
