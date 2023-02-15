import express from "express";
import * as dotenv from "dotenv";

import Photo from "../mongodb/models/photo.js";
import { uploadImage } from "../firebase/index.js";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).json({ success: true, data: photos });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "앨범을 불러들이는 데 실패했습니다. 다시 시도해주세요.",
    });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { image, username, dogname, photoContent } = req.body;

    const imgUrl = await uploadImage(image);

    const newPhoto = await Photo.create({
      imgUrl,
      username,
      dogname,
      photoContent,
    });

    res.status(200).json({ success: true, data: newPhoto });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "업로드에 실패했습니다. 다시 시도해주세요.",
    });
  }
});

export default router;
