const User = require("../models/user.model");

exports.findUserByEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
