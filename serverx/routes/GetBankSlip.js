import FirmData from "../models/FirmModel.js";
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.post("/getbankslip", async (req, res) => {
  let firmDatas = await FirmData.findById(
    mongoose.Types.ObjectId(req.body.firmid)
  ).populate("bankLink");
  if (!firmDatas) {
    res.status(500).json({ message: "firm not found" });
  }
  res.status(200).send({ firmDatas });

  console.log(
    "lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    firmDatas
  );
});

export default router;
