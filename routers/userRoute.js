const express = require("express");
// const {
//   registerUser,
//   currentUser,
//   loginUser,
// } = require("../controllers/userController");
const userRouter = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", userRouter.registerUser);

router.post("/login", userRouter.loginUser);

router.get("/current", validateToken, userRouter.currentUser);

module.exports = router;