// Product.js
import React from "react";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* We can add more product details here */}
    </div>
  );
}

export default Product;
