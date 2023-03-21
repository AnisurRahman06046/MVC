const bcrypt = require("bcryptjs");
const hashPassword = async (req, res, next) => {
  try {
    // generate salt
    const salt = await bcrypt.genSalt(10);

    // hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports=hashPassword
