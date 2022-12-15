import UserSlips from "../models/UserSlips.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/generateslip", auth, async (req, res) => {
  console.log(req.userId);
  const {
    firmid,
    bankname,
    branch,
    account,
    firmname,
    depositdate,
    cashdate,
    twothousand,
    fivehundered,
    twohundered,
    onehundered,
    fifty,
    twenty,
    ten,
    five,
    two,
    one,
    totalamount,
  } = req.body;
  // console.log(req.body.bankname);

  try {
    const data = new UserSlips({
      userid: req.userId,
      firmid: req.body.firmid,
      bankname: req.body.bankid,
      branch: req.body.branchid,
      account: req.body.accountfin,
      firmname: req.body.firmnamee,
      depositdate: req.body.depositdate,
      cashdate: req.body.cashdate,
      twothousand: req.body.amount2k,
      fivehundered: req.body.amount500,
      twohundered: req.body.amount200,
      onehundered: req.body.amount100,
      fifty: req.body.amount50,
      twenty: req.body.amount20,
      ten: req.body.amount10,
      five: req.body.amount5,
      two: req.body.amount2,
      one: req.body.amount1,
      totalamount: req.body.totalamount,
    });
    const dataRegister = await data.save();
    console.log("lol", dataRegister);
    let slipid = dataRegister._id;
    let usersid = dataRegister.userid;

    const firmlink = UserData.findOneAndUpdate(
      usersid,
      { $push: { slips: slipid } },
      function (err, data) {
        if (err) throw err;
        else if (data) {
          console.log("Slip added");
          console.log("firmlink", data);
        }
      }
    );

    res.status(201).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
