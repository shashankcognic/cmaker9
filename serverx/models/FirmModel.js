import mongoose, { Schema } from "mongoose";

const firmDataSchema = new mongoose.Schema(
  {
    firmname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gstin: {
      type: Schema.Types.Mixed,
      required: true,
    },
    pancard: {
      type: Schema.Types.Mixed,
      required: true,
    },
    address: {
      type: Schema.Types.Mixed,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    phonenumber2: {
      type: String,
      required: true,
    },

    bankLink: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userbranch",
      },
    ],

    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
      required: [true, "bank id is required"],
    },
  },
  {
    timestamp: true,
  }
);

const FirmData = mongoose.model("firmData", firmDataSchema);
export default FirmData;
