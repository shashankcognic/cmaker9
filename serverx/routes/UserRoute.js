import UserData from "../models/UserData.js";
import MasterBankData from "../models/MasterBankModel.js";
import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../routes/Auth.js";

router.post("/register", async (req, res) => {
  const { name, email, password, mobile, address } = req.body;

  const userExist = await UserData.findOne({ email: email });
  if (userExist) {
    res.status(500).json({ message: "User already exists", status: false });
  }

  try {
    const data = new UserData({
      name,
      email,
      password,
      mobile,
      address,
    });

    const dataRegister = await data.save();
    res.status(201).json({ message: "Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", function (req, res, next) {
  var name = req.body.name;

  UserData.find({ name: name })
    .exec()
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        res.status(404).json({
          message: "Auth Failed",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          user[0].password,
          function (err, result) {
            if (err) {
              res.json({
                message: "Auth Failed",
              });
            }
            if (result) {
              var token = jwt.sign(
                {
                  name: user[0].name,
                  id: user[0]._id,
                },
                "secret",
                {
                  expiresIn: "8h",
                }
              );
              return res.status(200).json({
                message: "User Found",
                token: token,
                name: name,
                // id : id,
                status: true,
              });
            } else {
              res.json({
                message: "Auth Failed",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

router.get("/get", auth, async (req, res) => {
  // const userDatas = await UserData.find();
  // res.status(200).json({
  // success: true,
  // userDatas,
  // });
  console.log("kkkk", req.userId);
  res.json({ status: true });
});

export default router;
