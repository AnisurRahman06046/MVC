const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const hashPassword = require("../utils/passwordHash");

router.route("/").post(hashPassword, userController.createUser)
.get(userController.getAllUser)


module.exports = router;
