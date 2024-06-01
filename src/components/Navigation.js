// Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Navigation.css";

function Navigation() {
  const { user, logout } = useAuth();

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kids
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <span>Hello, {user.username}</span>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
