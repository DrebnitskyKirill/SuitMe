import React from 'react';

function Product({ item }) {
  return (
    <div className="row">
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
