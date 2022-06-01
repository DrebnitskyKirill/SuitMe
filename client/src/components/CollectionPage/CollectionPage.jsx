import React from 'react';
import { useParams } from 'react-router-dom';
import Collection from '../Collection/Collection';
import SearchNav from '../SearchNav/SearchNav'

function CollectionPage() {
  const { name } = useParams()

  return (
    <>
      <SearchNav />
      <Collection name={name} />
    </>
  );
}

export default CollectionPage;
