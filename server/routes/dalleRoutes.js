import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const dalleResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = dalleResponse.data.data[0].b64_json;

    res.status(200).json({ success: true, data: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "반려견 이미지 생성에 실패했습니다. 다시 시도해주세요.",
    });
  }
});

export default router;
