const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.route");
const loginRoute = require("./routes/login.route");
const passport = require("passport");
require('./utils/passport')
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
// testing route
// app.get('/',(req,res)=>{
//     res.send({messge:'api is working'})
// })
app.get('/profile',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send({message:'profile route'})
})
app.use("/api/v1/user", userRoute);
app.use("/api/v1/login", loginRoute);

module.exports = app;
