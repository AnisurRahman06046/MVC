const { findUserByEmail } = require("../services/login.service");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/token");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    //    checking if the user exists or not
    if (!user) {
      return res.status(400).send({
        message: "user is not found",
      });
    }
    // checking the password with encrypted password
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "Incorrect password",
      });
    }
    console.log(req.body);
    // generating token
    const token = generateToken(user);
    res.status(200).send({
      message: "successfully logged in",
      token: `Bearer ${token}`,
    });
    // res.send('woriking')
  } catch (error) {
    res.status(400).send({
      status: "failed",
      error: error.message,
    });
  }
};
