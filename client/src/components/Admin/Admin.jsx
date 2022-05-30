import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initColorFetch, initSizeFetch } from "../../redux/reduxThunk/adminThunk";
import './Admin.css'
import AdminForm from "./AdminForm/AdminForm";

export default function Admin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initSizeFetch())
    dispatch(initColorFetch())
  }, [])
  
  return (
    <>
      <h2>Кабинет Администратора</h2>
      <AdminForm/>
    
    </>
  );
}
