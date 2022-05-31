import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ item }) {
  const navigate = useNavigate()

  return (
    <div className="row" onClick={()=> navigate(`/cardProduct/${item.id}`)}>
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={item.img} alt='img'/>
          </div>
          <div className="card-content">
            <p>{item.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
