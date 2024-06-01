// ProductListing.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./ProductListing.css";

const ProductListing = ({ section, products }) => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
