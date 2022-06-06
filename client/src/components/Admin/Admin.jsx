import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPhotoFetch, initActivityFetch, initColorFetch, initSizeFetch } from "../../redux/reduxThunk/adminThunk";
import style from './Admin.module.css'
import AdminForm from "./AdminForm/AdminForm";
import AdminProductCard from "./AdminProductCard/AdminProductCard";
import AdminSearch from "./AdminSearch/AdminSearch";

export default function Admin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSizeFetch())
    dispatch(initColorFetch())
    dispatch(initActivityFetch())
    dispatch(editPhotoFetch())
  }, [])

  return (
    <div className={style.admin}>
      <h2>Кабинет Администратора</h2>
      <AdminForm />
      <AdminSearch />
      <AdminProductCard/>

    </div>
  );
}
