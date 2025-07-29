const express = require("express");
const {
  register,
  login,
  logout,
  VerifyUser,
} = require("../controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/register", register);

authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.get("/verify", VerifyUser);

module.exports = authRoutes;
