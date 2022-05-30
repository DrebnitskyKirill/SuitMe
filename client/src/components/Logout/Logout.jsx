import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutFetch } from '../../redux/reduxThunk/userThunk';

function Logout() {
  const dispatch = useDispatch()
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
