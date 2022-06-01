import React from 'react';
import { useParams } from 'react-router-dom';
import Collection from '../Collection/Collection';
import SearchNav from '../SearchNav/SearchNav'

function CollectionPage(props) {
  const { id } = useParams()

  return (
    <>
      <SearchNav />
      <Collection typeOfProduct={id} />
    </>
  );
}

export default CollectionPage;
