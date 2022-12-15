import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
const CONNECTION_STRING =
  process.env.CONNECTION_STRING ||
  "mongodb+srv://Shanky:1234@expensedetails.ib4xj.mongodb.net/CheckMaker?retryWrites=true&w=majority";
import bodyParser from "body-parser";

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use(express.json());

// Routes
import UserRoute from "./routes/UserRoute.js";
import BankRoute from "./routes/BankRoute.js";
import FirmRoute from "./routes/FirmRoute.js";
import getbankroute from "./routes/GetBank.js";
import UserBankRouter from "./routes/UserBankRouter.js";
import GetFirm from "./routes/GetFirm.js";
import BankLinking from "./routes/BankLinking.js";
import findbyid from "./routes/findbyid.js";
import Getfirmslip from "./routes/GetfirmSlip.js";
import getbankslip from "./routes/GetBankSlip.js";
import GetBranches from "./routes/GetBranches.js";
import GetAccount from "./routes/GetAccount.js";
import GenerateSlip from "./routes/GenerateSlip.js";
// User routes path
app.use(`/login`, UserRoute);
app.use(`/register`, UserRoute);
app.use(`/`, UserRoute);

// Bank routes Path
app.use(BankRoute);
app.use(getbankroute);
// Bank routes Path
app.use(FirmRoute);
app.use(UserBankRouter);
app.use(GetFirm);
app.use(BankLinking);
app.use(findbyid);
app.use(Getfirmslip);
app.use(getbankslip);
app.use(GetBranches);
app.use(GetAccount);
app.use(GenerateSlip)
//Database
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CheckMaker",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server Port Running
app.listen(9000, () => {
  console.log("server is running http://localhost:9000");
});
