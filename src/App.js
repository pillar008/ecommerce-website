// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";
import {
  menProducts,
  womenProducts,
  kidsProducts,
} from "./components/products";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Routes>
            <Route
              path="/"
              exact
              element={<ProductListing section="men" products={menProducts} />}
            />
            <Route
              path="/women"
              element={
                <ProductListing section="women" products={womenProducts} />
              }
            />
            <Route
              path="/kids"
              element={
                <ProductListing section="kids" products={kidsProducts} />
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
