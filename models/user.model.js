const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxLength: [100, "Name is too long"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    validate: [
      validator.isStrongPassword,
      [
        {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        },
      ],
      "Please provide a strong password",
    ],
  },
//   location: {
//     type: String,
//     trim: true,
//   },
//   presentAddress: {
//     type: String,
//   },
//   contactNumber: {
//     type: String,
//     unique: true,
//     validate: [validator.isMobilePhone, "Please provide a valid number"],
//   },
},{timestamps:true});

const User = mongoose.model('Users',userSchema)
module.exports=User