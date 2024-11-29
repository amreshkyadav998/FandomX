const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers.js");

router.route("/signup").post(authcontrollers.signup);
router.route("/login").post(authcontrollers.login);


module.exports = router;