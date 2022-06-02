import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import style from "./navbar.module.css";
import logo from '../img/logo.jpg'
function Navbar() {
  const { user } = useSelector((store) => store.user);
  const [modal, setModal] = useState(false);
  const [statusCategory, setStatusCategory] = useState(false);
  const { categories } = useSelector((store) => store.products);

  return (
    <>
      <nav>
        <div className={style.nav}>
          <div className={style.navFlex}>
            <Link to="/" className={style.logo}>

            <img src={logo} alt='img'/>
            </Link>
            <div className={style.dropdown}>
              <p
                className={style.categories}
                onClick={() => setStatusCategory(!statusCategory)}
              >
                Коллекции
              </p>
              <div
                className={`${style.dropdownContent} ${statusCategory && style.show
                  }`}
              >
                {categories.map((el) => (
                  <div key={el.id} className={style.categories}>
                    <Link
                      to={`/collection/${el.name}`}
                      onClick={() => setStatusCategory(false)}
                      value={el.id}
                    >
                      {el.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className={style.navFlex}>
            {user.hasOwnProperty("id") ?
              <> <li><Link to='/cart'>Корзина</Link></li>
                <li><Link to='/logout'>Выйти</Link></li>
              </>
              :
              <li>
                <a className={style.a} onClick={() => setModal(true)}>
                  Войти
                </a>
              </li>
            }

          </ul>
        </div>
      </nav>
      <Modal isOpen={modal} closeModal={() => setModal(false)} />
    </>
  );
}

export default Navbar;
