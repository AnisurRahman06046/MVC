require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: "7d",
  });

  return token
};
