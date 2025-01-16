const express = require("express");
const router = express.Router();
const { register, login, getAllUsers, getUserById, getUserByEmail, getUserByToken } = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/get-users", getAllUsers);
router.get("/user/:id", getUserById);
router.get("/get-user/:email", getUserByEmail);
router.get('/get-user-by-token', getUserByToken);

router.get("/profile", authenticate, (req, res) => {
  res.json({ message: "User profile", user: req.user });
});

module.exports = router;
