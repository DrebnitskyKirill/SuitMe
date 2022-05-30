import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutFetch } from '../../redux/reduxThunk/userThunk';

function Logout() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  useEffect(() => {
    dispatch(logoutFetch())
  }, [dispatch])
  return (
    <>
    lllllll
    </>
  );
}

export default Logout;
