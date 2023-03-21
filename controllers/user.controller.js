const {
  createUserService,
  getAllUserService,
} = require("../services/user.service");

exports.createUser = async (req, res) => {
  try {
    const result = await createUserService(req.body);
    res.status(200).send({
      status: "success",
      message: "user is created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      error: "could not create the user",
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const result = await getAllUserService();
    res.status(200).send({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      error: "could not find the user",
    });
  }
};
