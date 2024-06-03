const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  // Handle validation errors
};

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id) => {
  return jwt.sign({ id }, "your-secret-key", {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res) => {
  // Handle user signup
};

module.exports.login = async (req, res) => {
  // Handle user login
};
