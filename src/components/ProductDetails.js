// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { menProducts, womenProducts, kidsProducts } from "./products";

const ProductDetails = () => {
  const { id } = useParams();

  // Combine all products into one array
  const allProducts = [...menProducts, ...womenProducts, ...kidsProducts];

  // Find the product by id
  const product = allProducts.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
