import express from "express";
import * as dotenv from "dotenv";

import Review from "../mongodb/models/review.js";
import { uploadImage } from "../firebase/index.js";

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
      message: "후기 리스트를 불러들이는 데 실패했습니다. 다시 시도해주세요.",
    });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { image, username, dogname, reviewContent } = req.body;

    const imgUrl = await uploadImage(image);

    const newReview = await Review.create({
      imgUrl,
      username,
      dogname,
      reviewContent,
    });

    res.status(200).json({ success: true, data: newReview });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "후기 작성에 실패했습니다. 다시 시도해주세요.",
    });
  }
});

export default router;
