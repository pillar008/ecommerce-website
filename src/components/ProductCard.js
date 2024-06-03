import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, showDetailsLink = true, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    {showDetailsLink && <Link to={`/product/${product.id}`}>View Details</Link>}
    {onAddToCart && (
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    )}
  </div>
);

export default ProductCard;
