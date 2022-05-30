import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showProductsFetch } from '../../redux/reduxThunk/productsThunk';
import Collection from '../Collection/Collection';
import SearchNav from '../SearchNav/SearchNav'

function CollectionPage(props) {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showProductsFetch());
  }, [])
  return (
    <>
      <SearchNav />
      <Collection typeOfProduct={id} />
    </>
  );
}

export default CollectionPage;
