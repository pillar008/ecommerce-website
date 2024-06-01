// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Signup.css"; // Import CSS for styling
import Login from "./Login"; // Import the Login component

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(true); // State to track signup form visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup process
    // Ideally, you'd want to save the user to a database
    if (username && password) {
      login(username, password);
      navigate("/");
    } else {
      alert("Please enter valid details");
    }
  };

  const handleLoginClick = () => {
    setShowLoginForm(true); // Show login form
    setShowSignupForm(false); // Hide signup form
  };

  return (
    <div className="signup-container">
      {showSignupForm && (
        <>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <div>
            Already have an account?{" "}
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </>
      )}
      {showLoginForm && <Login />}{" "}
      {/* Only render login form if showLoginForm is true */}
    </div>
  );
};

export default Signup;
