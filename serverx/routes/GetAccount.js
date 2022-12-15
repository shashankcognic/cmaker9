import UserBranch from "../models/UserBranch.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/getaccount", auth, async (req, res) => {
  const { firmid, bankid, branchid } = req.body;
  console.log(req.userId);
  console.log(bankid);
  console.log(branchid);
  const branchexist = await UserBranch.find({
    $and: [
      { userid: req.userId },
      { firmid: firmid },
      { bank: bankid },
      { branch: branchid },
    ],
  });
  if (branchexist) {
    return res.send(branchexist);
  } else {
    res.json({
      message: "error",
      status: false,
    });
  }
});

export default router;
