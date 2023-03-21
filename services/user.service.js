const User = require("../models/user.model");

exports.createUserService = async (data) => {
  const result = await User.create(data);
  return result;

  //   const result = await User.create(data);
  //   console.log(result)
  //   return result;
};
exports.getAllUserService=async()=>{
    const result = await User.find({})
    return result
}