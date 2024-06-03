import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/men" activeClassName="active">
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to="/women" activeClassName="active">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to="/kids" activeClassName="active">
            Kids
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li className="auth-links">
          {user ? (
            <>
              <span>Hello, {user.username}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
              <NavLink to="/signup" activeClassName="active">
                Signup
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
