import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import style from "./navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
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
              <h3>MIB</h3>
            </Link>
            <div className={style.dropdown}>
              <p
                className={style.categories}
                onClick={() => setStatusCategory(!statusCategory)}
              >
                Категории
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
            <li>
              <a className={style.a} onClick={() => setModal(true)}>
                Войти
              </a>
            </li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </div>
      </nav>
      <Modal isOpen={modal} closeModal={() => setModal(false)} />
    </>
  );
}

export default Navbar;
