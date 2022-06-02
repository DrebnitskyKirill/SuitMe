import React from 'react';
import { useParams } from 'react-router-dom';
import Collection from '../Collection/Collection';


function CollectionPage() {
  const { name } = useParams()

  return (
    <>
      
      <Collection name={name} />
    </>
  );
}

export default CollectionPage;
