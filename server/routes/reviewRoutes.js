import express from "express";
import * as dotenv from "dotenv";

import Review from "../mongodb/models/review.js";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "데이터를 불러들이는 데 실패했습니다. 다시 시도해주세요.",
    });
  }
});

export default router;
