const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers.js");
const validate = require("../middleware/validate-middleware.js");
const {signupSchema,loginSchema} = require("../validators/auth-validator.js");

router.route("/signup").post(validate(signupSchema) , authcontrollers.signup);
router.route("/login").post(validate(loginSchema), authcontrollers.login);


module.exports = router;