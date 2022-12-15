import FirmData from "../models/FirmModel.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.get("/getfirmslip", auth, async (req, res) => {
  console.log(req.userId);

  let bankDatas = await FirmData.find({ userid: req.userId });

  try {
    res.send(bankDatas);
  } catch (error) {
    console.log(error);
  }
});

export default router;
