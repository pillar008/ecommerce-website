import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "./CartContext";
import "./ProductListing.css";

const ProductListing = ({ section, products }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductListing;
