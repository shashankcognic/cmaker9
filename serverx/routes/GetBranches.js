import UserBranch from "../models/UserBranch.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/getbranches", auth, async (req, res) => {
  const { firmid, bankid } = req.body;
  console.log(req.userId);
  console.log(bankid);
  const branchexist = await UserBranch.find({
    $and: [{ userid: req.userId }, { firmid: firmid }, { bank: bankid }],
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
