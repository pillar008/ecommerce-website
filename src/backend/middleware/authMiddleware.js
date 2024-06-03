// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify token
  jwt.verify(token, "your-secret-key", async (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      try {
        const user = await User.findById(decodedToken.id);
        if (!user) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        // Attach user object to request
        req.user = user;
        next();
      } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
};

module.exports = { requireAuth };
