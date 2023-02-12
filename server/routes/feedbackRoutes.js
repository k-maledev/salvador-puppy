import express from "express";
import * as dotenv from "dotenv";

import Feedback from "../mongodb/models/feedback.js";

dotenv.config();

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { category, content } = req.body;

    const newFeedback = await Feedback.create({
      category,
      content,
    });

    res.status(200).json({ success: true, data: newFeedback });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "피드백 전송에 실패했습니다. 다시 시도해주세요.",
    });
  }
});

export default router;
