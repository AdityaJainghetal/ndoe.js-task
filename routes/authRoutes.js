const express = require("express")
const router = express.Router()

const {register,login,refreshToken} = require("../controlllers/authController.js")

router.post("/register",register);
router.post("/login", login)
router.post("/refresh-token", refreshToken)

module.exports = router