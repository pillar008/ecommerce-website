// Cart.js
import React from "react";
import { useCart } from "./CartContext";
import ProductCard from "./ProductCard";
import "./Cart.css";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            showDetailsLink={false}
            onAddToCart={null}
          >
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </ProductCard>
        ))
      )}
    </div>
  );
};

export default Cart;
